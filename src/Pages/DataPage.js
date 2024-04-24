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
    const [dataSource, setDataSource] = React.useState('tiktok');
    const handleClick = () => {
        setIsFront(!isFront);
    };

    const ContentCard = ({culturalGroup, context, goal, agreement, actor, actorBehavior, otherDescription, topic}) => {
        return (
            <div className='contentCard'>
                <div className='cardHeader'>
                    <p className='contentHead'>{culturalGroup}</p>
                    <div className='tag'>
                        <p className='contentTag'> {topic} </p>
                    </div>
                </div>
                <div className='cardContent-container'>
                    <div className='cardContent'>
                        <p className='contentTitle'>Context:</p>
                        <p className='contentText'>{context}</p>
                    </div>
                    {/* <div className='cardContent'>
                        <p className='contentTitle'>Goal:</p>
                        <p className='contentText'>{goal}</p>
                    </div> */}
                    <div className='cardContent'>
                        <p className='contentTitle'>Actor:</p>
                        <p className='contentText'>{actor}</p>
                    </div>
                    {/* <div className='cardContent'>
                        <p className='contentTitle'>Recipient:</p>
                        <p className='contentText'>{recipient}</p>
                    </div> */}
                    <div className='cardContent'>
                        <p className='contentTitle'>Actor's Behavior:</p>
                        <p className='contentText'>{actorBehavior}</p>
                    </div>
                    {/* <div className='cardContent'>
                        <p className='contentTitle'>Recipient's Behavior:</p>
                        <p className='contentText'>{recipientBehavior}</p>
                    </div> */}
                    <div className='cardContent'>
                        <p className='contentTitle'>Other Descriptions :</p>
                        <p className='contentText'>{otherDescription}</p>
                    </div>
                    <div className='agreementBarContainer'>
                        <progress className='agreementBar' value={parseFloat(agreement)}  max={1}></progress>
                        <span className='agreementBarValue'>Agreement: {`${(agreement * 100).toFixed(0)}%`}</span>
                    </div>
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
                <NavLink to="/insights" className={({ isActive }) => isActive ? "selectedButton" : "unselectedButton"}>
                    Insights
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
                <a href="https://arxiv.org/abs/2404.15238"
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
                        backContent="e.g. American, Californian, Asian American, international student, people from small towns"
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
                    <h2>Data Samples</h2>
                </div>
            </div>
            <div className='data-source-selector'>
                <button className={dataSource === 'tiktok' ? 'tiktok-selectedButton' : 'tiktok-unselectedButton'} onClick={() => setDataSource('tiktok')}>
                    TikTok
                </button>
                <button className={dataSource === 'reddit' ? 'reddit-selectedButton' : 'reddit-unselectedButton'} onClick={() => setDataSource('reddit')}>
                    Reddit
                </button>
            </div>
            <div className='insightContent'>
                {dataSource === 'tiktok' ? (
                    <>
                    <ContentCard
                        culturalGroup="American"
                        context="in the United States and grocery stores"
                        goal="to get free refills"
                        agreement="0.9"
                        actor="people"
                        actorBehavior="refer to chickpeas as 'chickpeas' or 'garbanzo beans', often using the term interchangeably"
                        otherDescription="the term 'chickpeas' has been adopted from Hispanic language"
                        topic="Cultural Traditions and Festivals"
                    />
                    <ContentCard
                        culturalGroup="Norwegian"
                        context="in Norway, particularly in the north"
                        goal="to avoid mistaking drugs for candies and maintain hygiene"
                        agreement="0.8"
                        actor="people, including children and parents"
                        actorBehavior="follow a strict candy consumption schedule, eating candy only on Saturdays and avoiding unwrapped candies"
                        otherDescription="candy is considered a treat and is typically bought on Saturdays"
                        topic="Food and Dining"
                    />
                    {/* <ContentCard
                        culturalGroup="Chinese"
                        context="in China, particularly in urban areas"
                        goal="to make payments and transfer money"
                        agreement="1"
                        actor="people and businesses"
                        actorBehavior="heavily rely on digital and mobile payment methods like WeChat Pay and Alipay, often using facial recognition"
                        otherDescription=""
                        topic="Finance and Economy"
                    /> */}
                    {/* <ContentCard
                        culturalGroup="Argentinian"
                        context="in the northern regions including Jujuy, Salta, and the north"
                        goal=""
                        agreement=""
                        actor="people"
                        actorBehavior="enjoy spicy food, particularly in local cuisine"
                        otherDescription=""
                        topic="Food and Dining"
                    /> */}
                    <ContentCard
                        culturalGroup="Canadian"
                        context="in Canada, particularly in Vancouver"
                        goal="express gratitude and ensure fair compensation"
                        agreement="0.9"
                        actor="people and customers"
                        actorBehavior="practice tipping, often at 20% or more, to express gratitude and ensure reasonable wages for servers"
                        otherDescription="tipping is considered a norm and is expected even with poor service"
                        topic="Social Norms and Etiquette"
                    />
                    <ContentCard
                        culturalGroup="Chinese"
                        context="in China during the COVID-19 pandemic"
                        goal="control the spread of COVID-19 and save lives"
                        agreement="0.7"
                        actor="government and citizens"
                        actorBehavior="implement and follow strict COVID-19 policies, including lockdowns, travel restrictions, and vaccination"
                        otherDescription="China has a high vaccination rate and enforces strict measures to control the pandemic"
                        topic="Health and Hygiene"
                    />
                    <ContentCard
                        culturalGroup="Dutch"
                        context="in the Netherlands and Germany"
                        goal="to provide and enjoy food"
                        agreement="1"
                        actor="people, mothers, and food providers"
                        actorBehavior="make and enjoy traditional snacks like oliebollen and bitterballen, spending hours in the kitchen and eating them as a popular snack"
                        otherDescription="oliebollen are a traditional Dutch snack, with carbidschieten being a related custom"
                        topic="Cultural Traditions and Festivals"
                    />
                    <ContentCard
                        culturalGroup="Australian"
                        context="in Australia, particularly in restaurants and bars"
                        goal=""
                        agreement="0.5"
                        actor="customers"
                        actorBehavior="tipping is not common or expected due to fair wages and good service"
                        otherDescription="tipping is not a common practice in Australia, but can be seen in some high-end establishments"
                        topic="Social Norms and Etiquette"
                    />
                    </>
                ) : (
                    <>
                    <ContentCard
                        culturalGroup="Swedes"
                        context="in Sweden"
                        goal="name and personify"
                        agreement="0.9"
                        actor="people and parents"
                        actorBehavior="give children unique, often European-inspired names, including using ordinal numbers and changing their own names for privacy"
                        otherDescription="names like William are common, and unconventional names are becoming more popular"
                        topic="Family Traditions and Heritage"
                    />
                    {/* <ContentCard
                        culturalGroup="Chinese people"
                        context="in China"
                        goal="improving people's quality of life and self-improvement"
                        agreement="1"
                        actor="people and government"
                        actorBehavior="focus on practical needs, hard work, and goal-oriented behavior, while opening markets and industrializing; also, a shift towards capitalist behavior in younger generations"
                        otherDescription="emphasis on relative safety, economic opportunity, and a spiritual approach to life and work; distrust of the government; ID is king; communism and socialism as means to achieve equality"
                        topic="Miscellaneous"
                    /> */}
                    {/* <ContentCard
                        culturalGroup="Ottoman Empire"
                        context="historical and geographical"
                        goal="remove and eradicate minority presence"
                        agreement="0.2"
                        actor="the Ottoman Empire"
                        actorBehavior="perpetrated genocide and ethnic cleansing, leading to mass displacement and murder of minority groups"
                        otherDescription="occurred over a long period, influenced by Christian religions of victims, and resulted in significant cultural and demographic changes"
                        topic="Miscellaneous"
                    /> */}
                    <ContentCard
                        culturalGroup="French"
                        context="music scene in France"
                        goal="entertainment, self-expression, and appreciation of music"
                        agreement="0.2"
                        actor="French musicians and audiences"
                        actorBehavior="create, produce, and listen to a diverse range of music including garage rock, punk, alternative, rap, and electro"
                        otherDescription="influence from Michel Audiard and underground music scenes like Frenchcore/hardtek"
                        topic="Miscellaneous"
                    />
                    <ContentCard
                        culturalGroup="Global"
                        context="General"
                        goal="Cultural appreciation and understanding"
                        agreement="0.8"
                        actor="People"
                        actorBehavior="Express pride, celebrate, and respect cultural diversity, while acknowledging and working towards reducing racism and cultural bias"
                        otherDescription="Includes a desire to reduce hostility and hateful generalizations"
                        topic="Cultural Traditions and Festivals"
                    />
                    <ContentCard
                        culturalGroup="Baby Boomers"
                        context="American society, workplace, and retirement"
                        goal="achieve and maintain prosperity"
                        agreement="0.4"
                        actor="Baby Boomers"
                        actorBehavior="believe in hard work for prosperity, enjoy benefits from low cost housing, education, and social services, and hold beliefs about bootstrapping"
                        otherDescription="perceived as ignorant and unwilling to acknowledge structural barriers faced by younger generations"
                        topic="Workplace"
                    />
                    <ContentCard
                        culturalGroup="Cajuns"
                        context="South-central and southwest Louisiana, Gulf region, and America"
                        goal="maintain their ethnic identity"
                        agreement="0.8"
                        actor="Cajuns"
                        actorBehavior="identify as an ethnic group with a distinct culture, including language, food, and traditions, often associated with the French heritage"
                        otherDescription="Cajuns are not defined by location or population status, but by their unique cultural practices"
                        topic="Community and Identity"
                    />
                    <ContentCard
                        culturalGroup="Americans"
                        context="globally, including their country and other nations"
                        goal="westernization and maintaining dominance"
                        agreement="0.4"
                        actor="Americans"
                        actorBehavior="spreading American culture, capitalist influence, and dominance"
                        otherDescription="globalization and the loss of previous cultures"
                        topic="Cultural Exchange"
                    />
                    {/* <ContentCard
                        culturalGroup=""
                        context=""
                        goal=""
                        agreement=""
                        actor=""
                        actorBehavior=""
                        otherDescription=""
                        topic=""
                    /> */}
                    </>
                )}
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
            <div style={{height: '1000px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0'}}/>
        </div>
    )
}

export default DataPage;