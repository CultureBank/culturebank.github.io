import './DataPage.css';
import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import headerImage from '../image/header.png';
import culture_group_icon from '../image/culture_group.png';
import context_icon from '../image/context.png'
import goal_icon from '../image/goal.png'
import actor_icon from '../image/actor.png'
import recipient_icon from '../image/recipient.png'
import relation_icon from '../image/relation.png'
import actor_behavior_icon from '../image/behavior.png'
import recipient_behavior_icon from '../image/behavior.png'
import other_description_icon from '../image/other_description.png'
import topic_icon from '../image/topic.png'
import agreement_icon from '../image/agreement.png'
import icon_fig from "../image/icon.svg";
import link_black_icon from "../image/link-black.png";
import link_white_icon from "../image/link-white.png";
import data_framework_fig from "../image/data_framework.svg"


function DataPage() {
    const [isFront, setIsFront] = useState(true);
    const [codeIcon, setCodeIcon] = useState(link_black_icon);
    const [paperIcon, setPaperIcon] = useState(link_black_icon);
    const [dataIcon, setDataIcon] = useState(link_black_icon);
    const handleClick = () => {
        setIsFront(!isFront);
    };

    const ContentCard = ({culturalGroup, context, goal, agreement, actor, recipient, actorBehavior, recipientBehavior, otherDescription, topic}) => {
        return (
            <div className='contentCard'>
                <div className='cardHeader'>
                    <p className='contentHead'>{culturalGroup}</p>
                    <div className='tag'>
                        <p className='contentTag'> {topic} </p>
                    </div>
                </div>
                <div className='cardContent'>
                    <p className='contentTitle'>Context:</p>
                    <p className='contentText'>{context}</p>
                </div>
                <div className='cardContent'>
                    <p className='contentTitle'>Goal:</p>
                    <p className='contentText'>{goal}</p>
                </div>
                <div className='cardContent'>
                    <p className='contentTitle'>Actor:</p>
                    <p className='contentText'>{actor}</p>
                </div>
                <div className='cardContent'>
                    <p className='contentTitle'>Recipient:</p>
                    <p className='contentText'>{recipient}</p>
                </div>
                <div className='cardContent'>
                    <p className='contentTitle'>Actor's Behavior:</p>
                    <p className='contentText'>{actorBehavior}</p>
                </div>
                <div className='cardContent'>
                    <p className='contentTitle'>Recipient's Behavior:</p>
                    <p className='contentText'>{recipientBehavior}</p>
                </div>
                <div className='cardContent'>
                    <p className='contentTitle'>Other Descriptions :</p>
                    <p className='contentText'>{otherDescription}</p>
                </div>
                <div className='agreementBarContainer'>
                    <progress className='agreementBar' value={parseFloat(agreement)}  max={1}></progress>
                    <span className='agreementBarValue'>Agreement: {`${(agreement * 100).toFixed(0)}%`}</span>
                </div>
            </div>
        )
    };

    const FlipCard = ({ title, frontContent, backContent, frontImage , frontImageSize}) => {
        const [isFront, setIsFront] = useState(true);
    
        const handleClick = () => {
            setIsFront(!isFront);
        };
    
        return (
            <div className="flip-card" onClick={handleClick}>
                <div className="flip-card-inner" style={{ transform: isFront ? 'rotateY(0deg)' : 'rotateY(180deg)' }}>
                    <div className="flip-card-content-front">
                        <h1 style={{marginTop: '15px'}}>{title}</h1>
                        <img src={frontImage} style={{ width: frontImageSize, marginTop: '0px', marginBottom: '0px' }} alt='frontImage'/>
                        <p>{frontContent}</p>
                    </div>
                    <div className="flip-card-content-back">
                        <h1>{title}</h1>
                        <p>{backContent}</p>
                    </div>
                </div>
            </div>
        );
    }

    const authors = [
        { name: "Weiyan Shi", affiliation: "1" },
        { name: "Ryan Li", affiliation: "1" },
        { name: "Yutong Zhang", affiliation: "1" },
        { name: "Caleb Ziems", affiliation: "1" },
        { name: "Chunhua Yu", affiliation: "1" },
        { name: "Raya Horesh", affiliation: "2" },
        { name: "Rogério Abreu de Paula", affiliation: "2" },
        { name: "Diyi Yang", affiliation: "1" }
    ];

    return (
        <div className="main">
            <div className='title'>
                <img src={icon_fig} style={{ width: '80px', marginRight: '0px'}} alt="Icon"/>
                <h1>CultureBank: An Online Community-Driven Knowledge Base Towards Culturally Aware Language Technologies</h1>
            </div>
            <div className="authors-list">
                {authors.map((author, index) => (
                    <span key={index} className="author-block">
                        <a>{author.name}</a>
                        <sup className="affiliation">{author.affiliation}</sup>
                        {index < authors.length - 1 ? ', ' : ' '}
                  </span>
                ))}
            </div>
            <div className='affiliations-list'>
                <span className="affiliation-block">
                    <sup>1</sup>Stanford University
                </span>
                <span className="affiliation-block">
                    <sup>2</sup>IBM Research
                </span>
            </div>
            <div className='selectors'>
                <NavLink to="/" className={({ isActive }) => isActive ? "selectedButton" : "unselectedButton"}>
                    Overview
                </NavLink>
                <NavLink to="/data" className={({ isActive }) => isActive ? "selectedButton" : "unselectedButton"}>
                    Data
                </NavLink>
                <NavLink to="/evaluation" className={({ isActive }) => isActive ? "selectedButton" : "unselectedButton"}>
                    Evaluation
                </NavLink>
                <NavLink to="/discussion" className={({ isActive }) => isActive ? "selectedButton" : "unselectedButton"}>
                    Discussion
                </NavLink>
            </div>
            <div className='link-buttons'>
                <a href="https://github.com/SALT-NLP/CultureBank"
                target="_blank"
                rel="noopener noreferrer"
                className="linkButton"
                onMouseEnter={() => setCodeIcon(link_white_icon)}
                onMouseLeave={() => setCodeIcon(link_black_icon)}>
                    <img src={codeIcon} style={{ width: '20px', marginRight: '13px' }} alt="GitHub Link Icon" />
                    Code
                </a>
                <a href="https://github.com/SALT-NLP/CultureBank"
                target="_blank"
                rel="noopener noreferrer"
                className="linkButton"
                onMouseEnter={() => setPaperIcon(link_white_icon)}
                onMouseLeave={() => setPaperIcon(link_black_icon)}>
                    <img src={paperIcon} style={{ width: '20px', marginRight: '13px' }} alt="GitHub Link Icon" />
                    Paper
                </a>
                <a href="https://huggingface.co/datasets/SALT-NLP/CultureBank"
                target="_blank"
                rel="noopener noreferrer"
                className="linkButton"
                onMouseEnter={() => setDataIcon(link_white_icon)}
                onMouseLeave={() => setDataIcon(link_black_icon)}>
                    <img src={dataIcon} style={{ width: '20px', marginRight: '13px' }} alt="GitHub Link Icon" />
                    Dataset
                </a>
            </div>
            <div className='vis-title'>
                <div className='vis-title-img'>
                    <img src={headerImage} alt='headerImage'/>
                </div>
                <div className='vis-title-content'>
                    <h2>Taxonomy</h2>
                </div>
            </div>
            <div className='taxonomy-col'>
                <div className='taxonomy-row'>
                    <FlipCard
                        title="Cultural Group"
                        frontContent="Groups of people with similar cultural backgrounds"
                        backContent="e.g. American, Californian, Asian American, international student people from small towns"
                        frontImage={culture_group_icon}
                        frontImageSize='60px'
                    />
                    <FlipCard
                        title="Context"
                        frontContent="Settings the behavior takes place"
                        backContent="e.g. in France, in public, 4th of July celebrations"
                        frontImage={context_icon}
                        frontImageSize='60px'
                    />
                    <FlipCard
                        title="Goal"
                        frontContent="What the behavior aims to achieve"
                        backContent="e.g. to adapt to different cultures, to celebrate"
                        frontImage={goal_icon}
                        frontImageSize='55px'
                    />
                    <FlipCard
                        title="Actor"
                        frontContent="Who exhibit the behavior "
                        backContent="e.g. people, customers, drivers"
                        frontImage={actor_icon}
                        frontImageSize='55px'
                    />
                    <FlipCard
                        title="Recipient"
                        frontContent="Recipient of the action"
                        backContent="e.g. kids, service staff, passengers"
                        frontImage={recipient_icon}
                        frontImageSize='55px'
                    />
                    <FlipCard
                        title="Relation"
                        frontContent="Relation between the actor and the recipient"
                        backContent="e.g. parents to children, actor to audience, among friends"
                        frontImage={relation_icon}
                        frontImageSize='58px'
                    />
                    <FlipCard
                        title="Actor's Behavior"
                        frontContent="Behavior of the actor"
                        backContent="e.g. dress casually, tip to express gratitude, drive on the right "
                        frontImage={actor_behavior_icon}
                        frontImageSize='55px'
                    />
                    <FlipCard
                        title="Recipient's Behavior"
                        frontContent="Behavior of the recipient"
                        backContent="e.g. respond with thanks, 
                        accept card payments, bag items for the customer"
                        frontImage={recipient_behavior_icon}
                        frontImageSize='55px'
                    />
                    <FlipCard
                        title="Other Description"
                        frontContent="Anything that cannot fit into the other fields"
                        backContent="e.g. Bangkok is known for its chaotic traffic"
                        frontImage={other_description_icon}
                        frontImageSize='45px'
                    />
                    <FlipCard
                        title="Topic"
                        frontContent="Representation of themes"
                        backContent="e.g. Social Norms and Etiquette, 
                        Communication and Language, Consumer Behavior"
                        frontImage={topic_icon}
                        frontImageSize='45px'
                    />
                    <FlipCard
                        title="Agreement"
                        frontContent="Agreement level"
                        backContent="e.g. percentage of people who agree"
                        frontImage={agreement_icon}
                        frontImageSize='55px'
                    />
                </div>
            </div>
            <div className='vis-title'>
                <div className='vis-title-img'>
                    <img src={headerImage} alt='headerImage'/>
                </div>
                <div className='vis-title-content'>
                    <h2>Construction Pipeline</h2>
                </div>
            </div>
            <div className='intro-fig-container'>
                <img src={data_framework_fig} style={{ width: '800px'}} alt="eval_fig" />
            </div>
            <div className='results-content'>
                <p>
                    Centering on the proposed taxonomy, we propose a bottom-up pipeline to construct cultural descriptors from online communities. Starting from comments on online communities, we will (1) select culture-related comments and  extract mentioned cultural descriptors, then (2) cluster these descriptors and summarize the clusters, and finally (3) post-process them to get agreement value and remove bad contents. Each step is validated by human evaluation.
                </p>
            </div>
            <div className='vis-title'>
                <div className='vis-title-img'>
                    <img src={headerImage} alt='headerImage'/>
                </div>
                <div className='vis-title-content'>
                    <h2>TikTok Data Samples</h2>
                </div>
            </div>
            <div className='insightContent'>
                <ContentCard
                    culturalGroup="American"
                    context="in various dining settings including diners, buffets, and fast food restaurants"
                    goal="to get free refills"
                    agreement="0.8"
                    actor="servers and customers"
                    recipient="customers and coffee shop staff"
                    actorBehavior="servers offer free refills, customers expect and ask for them, and sometimes complain when not provided"
                    recipientBehavior="provide refills"
                    otherDescription="free refills are common for water and soft drinks, but not for alcohol or smoothies"
                    topic="Drinking and Alcohol"
                />
                <ContentCard
                    culturalGroup="American"
                    context="in the United States"
                    goal="maintain and enhance safety"
                    agreement="0.7"
                    actor="people and government"
                    recipient="citizens and society"
                    actorBehavior="prioritize safety through various measures, including military strength, gun control, and emergency preparedness"
                    recipientBehavior="respond to safety concerns with varying perceptions"
                    otherDescription="safety levels and concerns vary across states and contexts"
                    topic="Safety and Security"
                />
                <ContentCard
                    culturalGroup="American"
                    context="in the United States, particularly in daycare settings"
                    goal="find suitable and affordable childcare"
                    agreement="0.9"
                    actor="parents"
                    recipient="daycare providers"
                    actorBehavior="actively seek, pay for, and express frustration over the high cost of daycare, often preferring more home-like settings"
                    recipientBehavior="provide care and follow regulations"
                    otherDescription="high cost of daycare and challenges in finding trustworthy caregivers"
                    topic="Family Dynamics"
                />
            </div>
            <div className='vis-title'>
                <div className='vis-title-img'>
                    <img src={headerImage} alt='headerImage'/>
                </div>
                <div className='vis-title-content'>
                    <h2>Reddit Data Samples</h2>
                </div>
            </div>
            <div className='insightContent'>
                <ContentCard
                    culturalGroup="Australian"
                    context="shopping and environmental conservation"
                    goal="reduce plastic waste and encourage sustainability"
                    agreement="1.0"
                    actor="government, stores, and customers"
                    recipient="customers and stores"
                    actorBehavior="implement and utilize reusable bags to reduce plastic usage"
                    recipientBehavior="use reusable bags and pay for plastic bags"
                    otherDescription="government imposes fees on plastic bags, stores charge for bags, and customers bring reusable bags to avoid fees"
                    topic="Environmental Adaptation and Sustainability"
                />
                <ContentCard
                    culturalGroup="Australian"
                    context="in bars, clubs, and restaurants"
                    goal="order and consume drinks"
                    agreement="1.0"
                    actor="people, including customers and bartenders"
                    recipient="bartenders and servers"
                    actorBehavior="order, serve, and consume alcoholic and non-alcoholic beverages, with a preference for local and unique drinks like lemon lime and bitters"
                    recipientBehavior="serve and offer free refills"
                    otherDescription="awareness of chasers and the practice of nudging in when possible"
                    topic="Drinking and Alcohol"
                />
                <ContentCard
                    culturalGroup="Australian"
                    context="employment and work-life balance"
                    goal="to encourage work-life balance and provide extra income"
                    agreement="1.0"
                    actor="employers and employees"
                    recipient="employers and employees"
                    actorBehavior="practice leave loading, where employees receive extra pay for taking annual leave"
                    recipientBehavior="take annual leave and receive extra pay"
                    otherDescription="minimum entitlements and 17% extra on days taken leave"
                    topic="Workplace"
                />
                {/* <ContentCard
                    culturalGroup=""
                    context=""
                    goal=""
                    agreement=""
                    actor=""
                    recipient=""
                    actorBehavior=""
                    recipientBehavior=""
                    otherDescription=""
                    topic=""
                /> */}
                {/* <ContentCard
                    culturalGroup=""
                    context=""
                    goal=""
                    agreement=""
                    actor=""
                    recipient=""
                    actorBehavior=""
                    recipientBehavior=""
                    otherDescription=""
                    topic=""
                /> */}
            </div>
        </div>
    )
}

export default DataPage;