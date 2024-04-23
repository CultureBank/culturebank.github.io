import './HomePage.css';
import headerImage from '../image/header.png';
import React, { useEffect, useRef, useState } from 'react';
import { Chart } from 'react-google-charts';
import * as d3 from 'd3';
import cloud from 'd3-cloud';
import { NavLink } from 'react-router-dom';
import tiktokGeoData from '../data/tiktok_region_distribution.json'
import tiktokTopicData from '../data/tiktok_topic_distribution.json'
import intro_fig from "../image/intro_fig.svg";
import icon_fig from "../image/icon.svg";
import link_black_icon from "../image/link-black.png";
import link_white_icon from "../image/link-white.png";

const WordCloud = ({ data }) => {
    const ref = useRef();

    useEffect(() => {
        if (ref.current) {
            ref.current.innerHTML = '';
        }

        const drawWordCloud = () => {
            const width = 1800;
            const height = 800;

            const layout = cloud()
                .size([width, height])
                .words(data.map(d => ({ text: d[0], size: +d[1] })))
                .padding(4)
                .rotate(() => ~~(2 * 2) * 90)
                .fontSize(d => Math.sqrt(d.size) * 2.1)
                .on("end", draw);

            layout.start();

            function draw(words) {
                const svg = d3.select(ref.current)
                    .attr("viewBox", `0 0 ${width} ${height}`)
                    .append("g")
                    .attr("transform", `translate(${width / 2},${height / 2})`);

                svg.selectAll("text")
                    .data(words)
                    .enter().append("text")
                    .style("font-size", d => `${d.size * 0.9}px`)
                    .style("font-family", "Ubuntu, sans-serif")
                    .style("font-weight", "medium")
                    .style("line-height", "1.2")
                    .style("fill", (d, i) => d3.schemeTableau10[i % 10])
                    .attr("text-anchor", "middle")
                    .attr("transform", d => `translate(${[d.x, d.y]})rotate(${d.rotate})`)
                    .text(d => d.text);
            }
        };

        drawWordCloud();
    }, [data]);

    return <svg ref={ref} style={{ width: '100%', height: '600px' }}></svg>;
};

function HomePage() {
    const [mapSource, setMapSource] = React.useState('tiktok');
    const [figSource, setFigSource] = React.useState('tiktok');
    const [codeIcon, setCodeIcon] = useState(link_black_icon);
    const [paperIcon, setPaperIcon] = useState(link_black_icon);
    const [dataIcon, setDataIcon] = useState(link_black_icon);

    const sum_count = Object.values(tiktokGeoData).reduce((a, b) => a + b, 0);
    const tiktokGeoChartsData = [
        ['Region', 'Count', { role: 'tooltip', type: 'string', p: { html: true } }],
        ...Object.entries(tiktokGeoData).map(([country, count]) => [
            country, 
            count, 
            `Percentage: ${(Math.round((count / sum_count * 100) * 100) / 100).toFixed(2)}%`
        ])
    ];
    const tiktokTopicChartsData = [
        ['Topic', 'Count'],
        ...Object.entries(tiktokTopicData).map(([topic, count]) => [topic, count])
    ];
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
        <div className='main'>
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
            <div className='intro-fig-container'>
                <img src={intro_fig} style={{ width: '70%', maxWidth: '2500px'}} alt="introduction_fig" />
            </div>
            <div className='quote'>
                <p className='quote-content'> "Globally, people express pride, celebrate, and respect cultural diversity, while acknowledging and working towards reducing cultural bias" </p>
                <p className='quote-source'> ------ CultureBank </p>
            </div>
            <div className='abstract'>
                <p> In this project, we explore the <span style={{fontWeight:500}}>cultural awarenesss</span> in language models. To this end, we introduce <span style={{fontWeight:500, fontStyle:'italic'}}>CultureBank</span>, a knowledge base built upon users' self-narratives with <span style={{fontWeight:500}}>12k</span> cultural descriptors sourced from TikTok and <span style={{fontWeight:500}}>11k</span> from Reddit. With CultureBank, we evaluate different LLMs' cultural awareness, and identify areas for improvement. We also fine-tune a language model on CultureBank: experiments show that it achieves better performances on two downstream cultural tasks in a zero-shot setting. Finally, we offer recommendations based on our findings for future culturally aware language technologies. </p>
            </div>
            <div className='visualization'>
                <div className='vis-title'>
                    <div className='vis-title-img'>
                        <img src={headerImage} alt='headerImage'/>
                    </div>
                    <div className='vis-title-content'>
                        <h2>Region Distribution</h2>
                    </div>
                </div>
                <div className='data-source-selector'>
                    <button className={mapSource === 'tiktok' ? 'tiktok-selectedButton' : 'tiktok-unselectedButton'} onClick={() => setMapSource('tiktok')}>
                        TikTok
                    </button>
                    <button className={mapSource === 'reddit' ? 'reddit-selectedButton' : 'reddit-unselectedButton'} onClick={() => setMapSource('reddit')}>
                        Reddit
                    </button>
                </div>
                <div className='vis-map'>
                    <Chart
                        chartType="GeoChart"
                        data={tiktokGeoChartsData}
                        width="90%"
                        height="550px"
                        options={{
                            colorAxis: { colors: ['#9BB0C1', '#6C99BD', '#497DA7', '#51829B', '#207098', '#016599', '#275A74'] },
                            tooltip: { isHtml: true }, 
                            fontName: 'Ubuntu',
                        }}
                    />
                </div>
            </div>
            <div className='visualization'>
                <div className='vis-title'>
                    <div className='vis-title-img'>
                        <img src={headerImage} alt='headerImage'/>
                    </div>
                    <div className='vis-title-content'>
                        <h2>Topic Distribution</h2>
                    </div>
                </div>
                <div className='data-source-selector'>
                    <button className={figSource === 'tiktok' ? 'tiktok-selectedButton' : 'tiktok-unselectedButton'} onClick={() => setFigSource('tiktok')}>
                        TikTok
                    </button>
                    <button className={figSource === 'reddit' ? 'reddit-selectedButton' : 'reddit-unselectedButton'} onClick={() => setFigSource('reddit')}>
                        Reddit
                    </button>
                </div>
                <div className='vis-map'>
                    <div className="vis-wordCloud">
                        <WordCloud data={tiktokTopicChartsData} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;