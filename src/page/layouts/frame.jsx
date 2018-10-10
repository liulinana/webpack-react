import React, { Component } from 'react';
import { Menu, Icon, Switch, Layout, Tooltip, Row, Col} from 'antd';
import styles from "../../style/Demo-m.css";
import {Link, Route, withRouter} from "react-router-dom";
import allMenu from '../../model/menu';
import Breadcrumbs from '../breadcrumbName';
import RouterData from '../../model/routersData';
import Bundle from "../../router/AsyncLoader";
import Follow from 'bundle-loader?lazy!.././mockPage/follow';
import Demo from 'bundle-loader?lazy!../../ReactApp';
import Tools from 'bundle-loader?lazy!../mockPage/tools';

const SubMenu = Menu.SubMenu;
const { Header, Content, Sider: Frame } = Layout;
const List = (props,ListContainer) => (
    <Bundle load={ListContainer}>
        {(List) => <List />}
    </Bundle>
)

    export default class Frames extends Component{
    constructor(props){
        super(props)
        this.state={
            theme: 'dark',
            current: 'home',
            collapsed: false,
        }
    }

    //更换主题
    changeTheme = (value) => {
        this.setState({
            theme: value ? 'dark' : 'light',
        });
    }

    handleClick = (e,special) => {
        console.log('click ', e);
        this.setState({
            current: e.key || special,
        });
    }

    //sider自定义触发器
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        return (
            <div>
                <Layout>
                    <Header className="header">
                        <div className={styles.logo}>
                            <Row>
                                <Col span={6}>
                                    <p>主题:</p>
                                </Col>
                                <Col span={14}>
                                    <Switch
                                        checked={this.state.theme === 'dark'}
                                        onChange={this.changeTheme}
                                        checkedChildren="Dark"
                                        unCheckedChildren="Light"
                                    />
                                </Col>
                                <Col span={4}>
                                    <Icon
                                        className="trigger"
                                        type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                        onClick={this.toggle}
                                    />
                                </Col>
                            </Row>
                        </div>
                        <div style={{color:'white',marginLeft:'98%'}}>
                            <Tooltip title="退出登录">
                                <Link to={`/`}><Icon type="logout" /></Link>
                            </Tooltip>
                        </div>
                    </Header>
                    <Layout>
                        <Frame width={200}
                               style={{ background: '#fff' }}
                               trigger={null}
                               collapsible
                               collapsed={this.state.collapsed}

                        >
                            <Menu
                                mode="inline"
                                style={{ height: 670, borderRight: 0, overflow: 'scroll', }}
                                theme={this.state.theme}
                                defaultOpenKeys={['']}
                                selectedKeys={[this.state.current]}
                                onClick={this.handleClick}
                            >
                                {
                                    allMenu.map((subMenu) => {
                                        if (subMenu.children && subMenu.children.length) {
                                            return (
                                                <SubMenu key={subMenu.url} title={<span><Icon type={subMenu.icon} /><span>{subMenu.name}</span></span>}>
                                                    {subMenu.children.map(menu => (
                                                        <Menu.Item key={menu.url}><Link to={`/${menu.url}`}>{menu.name}</Link></Menu.Item>
                                                    ))}
                                                </SubMenu>
                                            )
                                        }
                                        return (
                                            <Menu.Item key={subMenu.url}>
                                                <Link to={`/${subMenu.url}`}>
                                                    <Icon type={subMenu.icon} />
                                                    <span className="nav-text">{subMenu.name}</span>
                                                </Link>
                                            </Menu.Item>
                                        )
                                    })
                                }
                            </Menu>
                        </Frame>
                        <Layout style={{ padding: '0 24px 24px' }}>
                            <Breadcrumbs/>
                            <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280, overflow: 'scroll',position: 'relative'}}>
                                <Route path="/frame/follow"
                                       component={(props) => List(props, Follow)}
                                />
                                <Route path="/frame/home"
                                       component={(props) => List(props, Demo)}
                                />
                                <Route path="/frame/tool/tools"
                                       component={(props) => List(props, Tools)}
                                />
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
            </div>
        );
    }
}
