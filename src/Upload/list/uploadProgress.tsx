import React, { FC, useContext } from 'react';
import { STATUS, UploadListProps, CustomIconType } from '../interface';
import Progress, { ProgressProps } from '../../Progress';
import { UploadItem } from '../upload';
import { ConfigContext } from '../../ConfigProvider';
import CheckOutlined from '@sensoro-design/icons/CheckOutlined';
import UploadOutlined from '@sensoro-design/icons/UploadOutlined';
import PlayOutlined from '@sensoro-design/icons/PlayOutlined';
import PauseCircleFilled from '@sensoro-design/icons/PauseCircleFilled';
import Tooltip from '../../Tooltip';

const UploadProgress: FC<
  {
    listType?: UploadListProps['listType'];
    file: UploadItem;
    prefixCls: string;
    progressProps?: Partial<ProgressProps>;
    onReupload?: UploadListProps['onReupload'];
    onUpload?: UploadListProps['onUpload'];
    onAbort?: UploadListProps['onAbort'];
  } & CustomIconType
> = (props) => {
  const { file, prefixCls, progressProps } = props;
  const { locale } = useContext(ConfigContext);
  const { status, percent = 0 } = file;
  const cls = `${prefixCls}-list`;
  const widthStyle = progressProps && progressProps.width ? { width: progressProps.width } : {};
  return (
    <>
      {status === STATUS.fail && props.reuploadIcon !== null && (
        <span
          className={`${prefixCls}-list-reupload-icon`}
          onClick={() => {
            props.onReupload && props.onReupload(file);
          }}
        >
          {props.reuploadIcon ||
            (props.listType === 'picture-card' ? <UploadOutlined /> : locale.Upload.reupload)}
        </span>
      )}
      {status === STATUS.success && props.successIcon !== null && (
        <span className={`${prefixCls}-list-success-icon`}>
          {props.successIcon || <CheckOutlined />}
        </span>
      )}
      {status !== STATUS.success && (
        <div className={`${cls}-status`} style={widthStyle}>
          <Progress
            showText={false}
            className={`${cls}-progress`}
            type="circle"
            status={
              status === STATUS.fail ? 'error' : status === STATUS.success ? 'success' : 'normal'
            }
            percent={percent}
            size="mini"
            {...progressProps}
          />
          {status === STATUS.init && props.startIcon !== null && (
            <span
              className={`${prefixCls}-list-start-icon`}
              onClick={() => {
                props.onUpload && props.onUpload(file);
              }}
            >
              {props.startIcon || (
                <Tooltip content={locale.Upload.start}>
                  <PlayOutlined />
                </Tooltip>
              )}
            </span>
          )}

          {status === STATUS.uploading && props.cancelIcon !== null && (
            <span
              className={`${props.prefixCls}-list-cancel-icon`}
              onClick={() => {
                props.onAbort && props.onAbort(file);
              }}
            >
              {props.cancelIcon || (
                <Tooltip content={locale.Upload.cancel}>
                  <PauseCircleFilled />
                </Tooltip>
              )}
            </span>
          )}
        </div>
      )}
    </>
  );
};

export default UploadProgress;
