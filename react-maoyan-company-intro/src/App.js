import React from 'react';
import './App.css';


class WorkItem extends React.Component{
    render(){
        let desc=this.props.desc.map((item)=>
            <p>{item}</p>
        )
        return(
            <div class="work-item">
                <img src={require('./'+this.props.src)} alt={this.props.src}/>
                <div>{desc}</div>
            </div>
        )
    }
    
}

class Works extends React.Component{
    render(){
        let workItems=this.props.items.map((item,index)=>
            <WorkItem src={item.src}
            desc={item.desc}></WorkItem>
        )
        return (
            <div class="works">
                {workItems}
            </div>
        )
    }
}



function Header(props){
    return (
        <header>
        <h1>公司详情页</h1>
        </header>
    )
}
function Intro(props){
    return(
        <div class="intro">
            <div class="intro-first">
                <img src={require('./assets/paramount.jpeg')} alt="paramount" class="intro-logo" ></img>
                <div class="intro-content">
                    <p>派拉蒙影业公司</p>
                    <p>Paramount Pictures</p>
                    <p>娱乐公司|投资公司</p>
                </div>
            </div>
            <a href="/" class="intro-link">
                <div class="intro-item">
                    <p>第<strong>11</strong>名</p>
                    <p>今年主出品</p>
                </div>
                <div class="intro-line"></div>
                <div class="intro-item">
                    <p><strong>4</strong>部</p>
                    <p>作品数量</p>
                </div>
                <div class="intro-item">
                    <p><strong>4.11</strong>亿</p>
                    <p>总票房</p>
                </div>
                <img src={require('./assets/more.png')} alt="more"/>
            </a>
            <a href="/" class="intro-link">
                <div class="intro-item">
                    <p>第<strong>25</strong>名</p>
                    <p>今年主出行</p>
                </div>
                <div class="intro-line"></div>
                <div class="intro-item">
                    <p><strong>23</strong>部</p>
                    <p>作品数量</p>
                </div>
                <div class="intro-item">
                    <p><strong>8.82</strong>亿</p>
                    <p>总票房</p>
                </div>
                <img src={require('./assets/more.png')} alt="more"/>
            </a>
        </div>
    )
}

class Description extends React.Component{
    constructor(props){
        super(props);
        this.state={
            hasArrow:false,
            arrowIsDown:true,
            overHeight:'0px',
            currentHeight:'auto',
            paraClassList:'',
            arrowClassList:'down-arrow'
        }
    }
    
    render(){
        return (
        <div class="description">
            <p class={this.state.paraClassList}
                style={{height:this.state.currentHeight}}>华谊兄弟时代文化经纪有限公司创建于2000年，是国内最资深的经纪公司之一。华谊兄弟时代文化经纪有限公司主要华谊兄
            弟时代文化经纪有限公司主要华谊兄解放军队京东卡里的开发了放大镜看老师的计分卡圣诞节克己复礼的撒娇金发科技圣诞快乐</p>
            {this.state.hasArrow?<div class={this.state.arrowClassList} 
                onClick={()=>{this.handleClick()}}></div>:null}
        </div>
        )
    }
    componentDidMount(){
        let para=document.querySelector('.description p');
        console.log(para.offsetHeight);
        if(para.offsetHeight>60){
            this.setState({
                hasArrow:true,
                paraClassList:'para-overflow',
                overHeight:para.offsetHeight+'px',
                currentHeight:'60px'
            });
        }

    }
    handleClick(){
        if(this.state.arrowIsDown){
            this.setState({
                paraClassList:'',
                arrowClassList:'down-arrow up-arrow',
                currentHeight:this.state.overHeight,
                arrowIsDown:!this.state.arrowIsDown
            })
        }
        else{
            this.setState({
                paraClassList:'para-overflow',
                arrowClassList:'down-arrow',
                currentHeight:'60px',
                arrowIsDown:!this.state.arrowIsDown
            })
        }
    }

}

function Represent(){
    let items=[
        {
            src:'assets/xingjichuanyue.jpeg',
            desc:[
                '星际穿越',
                '7.55亿票房'
            ]
        },
        {
            src:'assets/diezhongdie.jpg',
            desc:[
                '碟中谍6',
                '12.45亿票房'
            ]
        },
        {
            src:'assets/dahuangfeng.jpg',
            desc:[
                '大黄蜂',
                '11.47亿元票房'
            ]
        },
        {
            src:'assets/gangtiexia3.jpeg',
            desc:[
                '钢铁侠3',
                '7.45亿票房'
            ]
        },
        {
            src:'assets/bianxingjingang3.jpg',
            desc:[
                '变形金刚3',
                '10.71亿票房'
            ]
        }
    ];
    return (
        <div class="section">
            <p class="section-title">代表作品</p>
            <Works items={items}></Works>
            <a class="section-link" href="/">
            <p>全部54部作品</p> 
            <div class="right-arrow"></div>
        </a>
        </div>
    )
}

function Members(){
    const members=[
        {
            name:'王中军',
            title:'董事长'
        },
        {
            name:'王中磊',
            title:'总裁'
        },
        {
            name:'高明',
            title:'财务总监'
        },
        {
            name:'孙晓璐',
            title:'艺术总监'
        },
        {
            name:'xxx',
            title:'总经理'
        }
    ].map((item)=>
        <div class="members-item">
            <p>{item.name}</p>
            <p>{item.title}</p>
        </div>
    );
    return (
        <div class="members">
            <p class="section-title">公司成员</p>
            <div class="members-list">
                {members}
            </div>
            <a href="/" class="section-link">
            <p>全部8位成员</p>
            <div class="right-arrow"></div>
        </a>
        </div>
    )
}

function Actors(){
    const items=[
        {
            src:'assets/yangying.jpg',
            desc:['杨颖']
        },
        {
            src:'assets/lixiaolu.jpeg',
            desc:['李小璐']
        },
        {
            src:'assets/fengshaofeng.jpg',
            desc:['冯绍峰']
        },
        {
            src:'assets/lichen.png',
            desc:['李晨']
        },
        {
            src:'assets/yangmi.jpg',
            desc:['杨幂']
        }
    ];
    return (
        <div class="section actors">
            <p class="section-title">签约艺人</p>
            <Works items={items}></Works>
            <a class="section-link" href="/">
                <p>全部125位艺人</p>
                <div class="right-arrow"></div>
            </a>
        </div>
    )
}

class Information extends React.Component{
    constructor(props){
        super(props);
        this.state={
            hasArrow:false,
            arrowIsDown:true,
            currentHeight:'auto',
            overHeight:'0px',
            arrowClassList:'',
            arrowInfor:'展开'
        }
    }
    render(){
        return (
        <div class="information">
            <p class="section-title">公司信息</p>
            <div class="information-main" style={{height:this.state.currentHeight}}>
                <div class="information-item">
                    <p>公司性质</p>
                    <p>外商独资</p>
                </div>
                <img src={require("./assets/line1.png")} alt="line" class="line1"></img>
                <div class="information-item">
                    <p>公司类型</p>
                    <p>娱乐公司 投资公司当文字超长的时候就真的需
                            要折行了，公司信息这里的字段折行的样式...</p>
                </div>
                <img src={require("./assets/line2.png")} alt="line" class="line2"></img>
                <div class="information-item">
                    <p>母公司</p>
                    <p>北京光线传媒公司</p>
                    <div class="information-item-arrow">
                        <div class="right-arrow"></div>
                    </div>
                </div>
                <img src={require("./assets/line3.png")} alt="line" class="line3"></img>
                <div class="information-item">
                    <p>上市情况</p>
                    <p>已上市</p>
                </div>
            </div>
            {
                this.state.hasArrow?
                <div class="information-more" 
                    onClick={(event)=>this.handleClick(event)}>
                    <span>{this.state.arrowInfor}</span>
                    <img src={require("./assets/open.png")} alt="open"
                        class={this.state.arrowClassList}></img>
                </div>:null
            }
            
        </div>
        )
    }
    componentDidMount(){
        let main=document.querySelector('.information-main');
        if(main.offsetHeight>141){
            this.setState({
                overHeight:main.offsetHeight+'px',
                currentHeight:'141px',
                hasArrow:true
            })
        }
    }
    handleClick(event){
        if(event.target.tagName==='SPAN'||event.target.tagName==='IMG'){
            if(this.state.arrowIsDown){
                this.setState({
                    currentHeight:this.state.overHeight,
                    arrowClassList:'img-rotate',
                    arrowInfor:'收起',
                    arrowIsDown:!this.state.arrowIsDown
                })
            }
            else{
                this.setState({
                    currentHeight:'141px',
                    arrowClassList:'',
                    arrowInfor:'展开',
                    arrowIsDown:!this.state.arrowIsDown
                })
            }
        }
        
    }

}

function Contact(){
    return (
        <div class="contact">
            <p class="section-title">联系方式</p>
            <div class="contact-content">
                <p>北京市西城区西直门北展北街7号楼903这里又有了，超长文案要折行折行折行折行折行折行折行折行折行折行折行折...</p>
                <p>010-62224280</p>
                <p>www.maoyan.com</p>
                <p>obistiman@gmail.com</p>
            </div>
        </div>
    )
}

function Footer(){
    return(
        <footer>
            <p>*丰富信息请发送邮件至 <span>v@maoyan.com</span></p>
        </footer>
    )
}

function App(props){
    return(
        <div>
            <Header></Header>
            <Intro></Intro>
            <Description></Description>
            <Represent></Represent>
            <Members></Members>
            <Actors></Actors>
            <Information></Information>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
}

export default App
