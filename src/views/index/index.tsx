
import './index.less'

import { Button, Form, Input, Modal, Upload, message } from 'antd';
import React, { useState, useRef } from 'react';
import type { UploadProps } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import { post } from "@utils/request"

interface Values {
  title: string;
  description: string;
  modifier: string;
}

interface CollectionCreateFormProps {
  visible: boolean;
  imgArr: any;
  onCreate: (values: Values) => void;
  onCancel: () => void;
}

const normFile = (e: any) => {
  console.log('Upload event:', e);
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};

const CollectionCreateForm: React.FC<CollectionCreateFormProps> = ({
  visible,
  imgArr,
  onCreate,
  onCancel,
}) => {


  const props: UploadProps = {
    name: 'file',
    accept: 'image/*',
    multiple: true,
    action: '/api/pic',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info: any) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        imgArr.current = info.fileList.map((it: any) => {
          return it.response
        })
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
      console.log(imgArr);
    },
  };

  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Create a new collection"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then(values => {
            form.resetFields();
            onCreate(values);
          })
          .catch(info => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form
        form={form}
        name="basic"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 18 }}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="namepic"
          rules={[{ required: true, message: '给个名' }]}
        >
          <Input placeholder='给个名' />
        </Form.Item>
        <Form.Item
          label="Pic"
          name="datapic"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          rules={[{ required: true, message: '给个图' }]}
        >
          {/* <Input type='file' accept='image/*' bordered={false} /> */}
          <Upload {...props}>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        </Form.Item>
      </Form>
    </Modal>
  );
};

const GarMain: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const onCreate = (values: any) => {
    console.log('Received values of form: ', values);

    post('/sub', {
      name: 123
    })

    setVisible(false);
  };

  const imgArr = useRef([])

  return (
    <div>
      <div className="garmain-wrap">
        <div>
          <div className='add-garbage' onClick={() => {
            setVisible(true);
          }}> 网络垃圾桶 </div>
        </div>
        <div className='garmain-text'>
          仅个人用途，存放图片
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
        <div>
          {
            imgArr.current?.map((it: any) => {
              return <img src={it} alt="tupian" className='main-test-img' key={it}/>
            })
          }
        </div>
      </div>
      <CollectionCreateForm
        visible={visible}
        imgArr={imgArr}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default GarMain;