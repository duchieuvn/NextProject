import { Flex, Button, Form } from "antd";

import ProductSelectCard from "./ProductSelectCard";

export default function OrderFormProducts() {
  return (
    <Flex vertical>
      {/* Nest Form.List */}
      <Form.Item>
        <Form.List name={["products"]}>
          {(subFields, subOpt) => (
            <Flex vertical>
              {subFields.map((subField) => (
                <ProductSelectCard
                  key={subField.key}
                  subField={subField}
                  subOpt={subOpt}
                />
              ))}
              <Button type="dashed" onClick={() => subOpt.add()} block>
                + Thêm sản phẩm
              </Button>
            </Flex>
          )}
        </Form.List>
      </Form.Item>
    </Flex>
  );
}
