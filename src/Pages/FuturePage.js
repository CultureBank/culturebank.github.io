import React, { useState } from 'react';
import './FuturePage.css';
import headerImage from '../image/header.png';
import { NavLink } from 'react-router-dom';
import icon_fig from "../image/icon.svg";
import link_black_icon from "../image/link-black.png";
import link_white_icon from "../image/link-white.png";
import temp_analysis_1 from '../image/reddit_entertainment_temporal_analysis.png';
import temp_analysis_2 from '../image/reddit_topics_temporal_analysis.png';

function FuturePage() {
    const [codeIcon, setCodeIcon] = useState(link_black_icon);
    const [paperIcon, setPaperIcon] = useState(link_black_icon);
    const [dataIcon, setDataIcon] = useState(link_black_icon);

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
                    <h2>Cultural knowledge data</h2>
                </div>
            </div>
            <div className='content-list'>
                <ul>
                    <li className='content-list-section'>
                        <h2 className='content-list-head'>📱 Data source</h2>
                        <p>Different data sources cover various aspects of culture: official documents like textbooks provide factual cultural knowledge, while online communities like social media offer insights on everyday cultural practices. So we should invite diverse data sources to capture the full spectrum of culture in the future.</p>
                    </li>
                    <li className='content-list-section'>
                        <h2 className='content-list-head'>📂 Data contents</h2>
                        <p>Culture is multifaceted, so it is also important to factor in various dimensions in the data content.</p>
                        <div className='content-sublist'>
                            <p>🫂 <span style={{fontWeight:'600'}}>Cross-culture behavior: </span> it is crucial to understand cross-culture behaviors to facilitate effective communication</p>
                            <p>🗣️ <span style={{fontWeight:'600'}}>Perspectives: </span>to track through whose lens we are looking at a certain culture behavior, because different perspectives may lead to different understanding of the same cultural practice</p>
                            <p>🕐 <span style={{fontWeight:'600'}}>Time: </span>future data efforts should also consider the time factor to enable temporal analysis</p>
                            <p>💱 <span style={{fontWeight:'600'}}>Multilingual: </span>to capture the cultural nuances, in the future, we should develop multilingual multicultural knowledge banks</p>
                            <p>🖼️ <span style={{fontWeight:'600'}}>Multimodality: </span>to include different modalities to capture the full spectrum of culture, from non-verbal communication cues, to rituals and arts, and so on in the future</p>
                        </div>
                    </li>
                    <li className='content-list-section'>
                        <h2 className='content-list-head'>📉 Data analysis</h2>
                        <p> future research should consider temporal change rather than focusing on static data, as culture is evolving over time.</p>
                    </li>
                    <div className='content-list-imgs'>
                        <img src={temp_analysis_1} style={{width: '750px', marginTop: '20px'}} alt='temp_analysis_1'/>
                        <img src={temp_analysis_2} style={{width: '750px', marginTop: '20px'}} alt='temp_analysis_2'/>
                    </div>
                </ul>
            </div>
            <div className='vis-title'>
                <div className='vis-title-img'>
                    <img src={headerImage} alt='headerImage'/>
                </div>
                <div className='vis-title-content'>
                    <h2>Cultural awareness evaluation</h2>
                </div>
            </div>
            <div className='content-list'>
                <li className='content-list-section'>
                    <h2 className='content-list-head'>📝 Challenges of Human Annotation</h2>
                    <p>In our evaluation, humans also find it difficult to decide which model response is more culturally aware, partly because they are not from the presented cultural group. As we spend more effort on cultural data resources, it is also increasingly important to involve <span style={{fontWeight:600}}>global annotators</span> to enable more accurate evaluation.</p>
                </li>
                <li className='content-list-section'>
                    <h2 className='content-list-head'>⚠️ Limitation of Direct Evaluation</h2>
                    <p>As shown in our findings, direct and <span style={{fontWeight:600}}>grounded evaluations</span> give different results.</p>
                </li>
            </div>
            <div className='vis-title'>
                <div className='vis-title-img'>
                    <img src={headerImage} alt='headerImage'/>
                </div>
                <div className='vis-title-content'>
                    <h2>Training culturally-aware language technologies</h2>
                </div>
            </div>
            <div className='content-list'>
                <p>We realize that when fine-tuning models for cultural awareness, training only on the cultural knowledge or the grounded QA tasks could be insufficient. Take training a culturally-aware conversational assistant as an example.</p>
                <p>🔄 It requires appropriate cultural data grounded in <span style={{fontWeight:600}}>multi-turn conversational</span> settings.</p>
                <p>📄 It requires a <span style={{fontWeight:600}}>well-designed training paradigm</span> to attend to the cultural nuances potentially implicit in the dialogue context.</p>
                <p>✏️ It also needs a <span style={{fontWeight:600}}>solid evaluation method</span> to rate the culture awareness of the generated responses, to help the model improve and evolve. Such a model needs to have a holistic view of the user cultural background, a personalized recognition of individual differences, and an inclusive mind for new cultural concepts and practices.</p>
            </div>
            <div style={{height: '1000px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0'}}/>
        </div>
    )
}

export default FuturePage;