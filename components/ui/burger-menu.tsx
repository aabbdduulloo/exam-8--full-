"use client";
import React, { useState } from "react";
import { Menu, Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import Link from "next/link";

const { SubMenu } = Menu;

const App = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const closeDrawer = () => {
    setVisible(false);
  };

  return (
    <div>
      <Button type="primary" icon={<MenuOutlined />} onClick={showDrawer} />
      <Drawer
        title="Menu"
        placement="left"
        closable={true}
        onClose={closeDrawer}
        visible={visible}
      >
        <Menu mode="inline" style={{ height: "100%", borderRight: 0 }}>
          <Menu.Item>
            <Link href={"/products"}>Продукты</Link>
          </Menu.Item>
          <Menu.Item key="2">Контакты</Menu.Item>
          <Menu.Item key="3">
            {" "}
            <Link href={"/payment"}>Оплата и Доставка</Link>
          </Menu.Item>
          <Menu.Item key="4">
            {" "}
            <Link href={"/news"}>Новости</Link>
          </Menu.Item>
          <Menu.Item key="5">
            {" "}
            <Link href={"/about-us"}>О нас</Link>
          </Menu.Item>
        </Menu>
      </Drawer>
    </div>
  );
};

export default App;
