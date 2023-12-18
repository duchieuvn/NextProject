"use client";
import {
  Flex,
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Card,
  Space,
  Typography,
} from "antd";

import { CloseOutlined } from "@ant-design/icons";

export default function OrderForm() {
  const [form] = Form.useForm();

  return (
    <Form
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 18 }}
      form={form}
      name="dynamic_form_complex"
      style={{ maxWidth: 600 }}
      autoComplete="off"
      initialValues={{}}
    >
      <div style={{ display: "flex", rowGap: 16, flexDirection: "column" }}>
        <Card
          size="small"
          title={`Order`}
          extra={<CloseOutlined onClick={() => {}} />}
        >
          <Form.Item label="Tên người nhận" name={["customer_name"]}>
            <Input />
          </Form.Item>
          <Form.Item label="Số điện thoại">
            <Input />
          </Form.Item>
          <Form.Item label="Địa chỉ">
            <Input />
          </Form.Item>
          <Form.Item label="Giờ hẹn">
            <Select>
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label="Ngày hẹn">
            <DatePicker />
          </Form.Item>
          <Form.Item label="Phí vận chuyển">
            <InputNumber />
          </Form.Item>
          <Form.Item label="Giảm giá">
            <InputNumber />
          </Form.Item>

          {/* Nest Form.List */}
          <Form.Item>
            <Form.List name={["products"]}>
              {(subFields, subOpt) => (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: 16,
                  }}
                >
                  {subFields.map((subField) => (
                    <Space key={subField.key}>
                      <Form.Item noStyle name={[subField.name, "first"]}>
                        <Input placeholder="first" />
                      </Form.Item>
                      <Form.Item noStyle name={[subField.name, "second"]}>
                        <Input placeholder="second" />
                      </Form.Item>
                      <CloseOutlined
                        onClick={() => {
                          subOpt.remove(subField.name);
                        }}
                      />
                    </Space>
                  ))}
                  <Button type="dashed" onClick={() => subOpt.add()} block>
                    + Thêm sản phẩm
                  </Button>
                </div>
              )}
            </Form.List>
          </Form.Item>
        </Card>
      </div>

      <Form.Item noStyle shouldUpdate>
        {() => (
          <Typography>
            <pre>{JSON.stringify(form.getFieldsValue(), null, 2)}</pre>
          </Typography>
        )}
      </Form.Item>
    </Form>
  );
}
