import React, { useState } from 'react';
import './EvaluationPage.css';
import { NavLink } from 'react-router-dom';
import eval_fig from "../image/eval_fig.svg";
import headerImage from "../image/header.png";
import icon_fig from "../image/icon.svg";
import link_black_icon from "../image/link-black.png";
import link_white_icon from "../image/link-white.png";
import win_rate_fig from "../image/win_rate.png"

function EvaluationPage() {
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

    const ModelComparisonTable = () => {
        return (
          <div style={{ width: '100%', overflowX: 'auto'}}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: "Ubuntu, sans-serif", fontSize: '22px', fontWeight: '300'}}>
              <thead>
                <tr>
                  <th style={{ borderBottom: '2px solid #000', padding: '10px', paddingLeft: '40px', paddingRight: '40px', textAlign: 'left' }}>Model</th>
                  <th style={{ borderBottom: '2px solid #000', padding: '10px', paddingLeft: '40px', paddingRight: '40px' }}>High</th>
                  <th style={{ borderBottom: '2px solid #000', padding: '10px', paddingLeft: '40px', paddingRight: '40px' }}>Mid</th>
                  <th style={{ borderBottom: '2px solid #000', padding: '10px', paddingLeft: '40px', paddingRight: '40px' }}>Low</th>
                  <th style={{ borderBottom: '2px solid #000', padding: '10px', paddingLeft: '40px', paddingRight: '40px' }}>All</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: '10px', paddingLeft: '40px', paddingRight: '40px' }}>Llama-2-7B-chat</td>
                  <td style={{ padding: '10px', paddingLeft: '40px', paddingRight: '40px' }}>71.2</td>
                  <td style={{ padding: '10px', paddingLeft: '40px', paddingRight: '40px' }}>66.0</td>
                  <td style={{ padding: '10px', paddingLeft: '40px', paddingRight: '40px' }}>61.2</td>
                  <td style={{ padding: '10px', paddingLeft: '40px', paddingRight: '40px' }}>62.5</td>
                </tr>
                <tr>
                  <td style={{ padding: '10px', paddingLeft: '40px', paddingRight: '40px' }}>Llama-2-70B-chat</td>
                  <td style={{ padding: '10px', paddingLeft: '40px', paddingRight: '40px' }}>74.9</td>
                  <td style={{ padding: '10px', paddingLeft: '40px', paddingRight: '40px' }}>66.2</td>
                  <td style={{ padding: '10px', paddingLeft: '40px', paddingRight: '40px' }}>64.2</td>
                  <td style={{ padding: '10px', paddingLeft: '40px', paddingRight: '40px' }}>65.1</td>
                </tr>
                <tr>
                  <td style={{ padding: '10px', paddingLeft: '40px', paddingRight: '40px' }}>Mistral-7B-Instruct</td>
                  <td style={{ padding: '10px', paddingLeft: '40px', paddingRight: '40px' }}>72.9</td>
                  <td style={{ padding: '10px', paddingLeft: '40px', paddingRight: '40px' }}>67.2</td>
                  <td style={{ padding: '10px', paddingLeft: '40px', paddingRight: '40px' }}>63.4</td>
                  <td style={{ padding: '10px', paddingLeft: '40px', paddingRight: '40px' }}>64.5</td>
                </tr>
                <tr>
                  <td style={{ padding: '10px', paddingLeft: '40px', paddingRight: '40px' }}>Mixtral-8x7B-Instruct</td>
                  <td style={{ padding: '10px', paddingLeft: '40px', paddingRight: '40px' }}>73.9</td>
                  <td style={{ padding: '10px', paddingLeft: '40px', paddingRight: '40px' }}>67.4</td>
                  <td style={{ padding: '10px', fontWeight: 'bold', paddingLeft: '40px', paddingRight: '40px' }}>66.3</td>
                  <td style={{ padding: '10px', fontWeight: 'bold', paddingLeft: '40px', paddingRight: '40px' }}>66.9</td>
                </tr>
                <tr>
                  <td style={{ padding: '10px', paddingLeft: '40px', paddingRight: '40px' }}>GPT-3.5</td>
                  <td style={{ padding: '10px', paddingLeft: '40px', paddingRight: '40px' }}>71.4</td>
                  <td style={{ padding: '10px', paddingLeft: '40px', paddingRight: '40px' }}>66.4</td>
                  <td style={{ padding: '10px', paddingLeft: '40px', paddingRight: '40px' }}>61.8</td>
                  <td style={{ padding: '10px', paddingLeft: '40px', paddingRight: '40px' }}>62.6</td>
                </tr>
                <tr>
                  <td style={{ padding: '10px', paddingLeft: '40px', paddingRight: '40px' }}>GPT-4</td>
                  <td style={{ padding: '10px', fontWeight: 'bold', paddingLeft: '40px', paddingRight: '40px' }}>75.8</td>
                  <td style={{ padding: '10px', fontWeight: 'bold', paddingLeft: '40px', paddingRight: '40px' }}>67.9</td>
                  <td style={{ padding: '10px', paddingLeft: '40px', paddingRight: '40px' }}>65.0</td>
                  <td style={{ padding: '10px', paddingLeft: '40px', paddingRight: '40px' }}>66.1</td>
                </tr>
                <tr>
                  <td style={{ padding: '10px', fontWeight: 'bold', paddingLeft: '40px', paddingRight: '40px' }}>Llama2-7B-SFT (Ours)</td>
                  <td style={{ padding: '10px', fontWeight: 'bold', paddingLeft: '40px', paddingRight: '40px' }}>75.7</td>
                  <td style={{ padding: '10px', paddingLeft: '40px', paddingRight: '40px' }}>67.1</td>
                  <td style={{ padding: '10px', paddingLeft: '40px', paddingRight: '40px' }}>63.8</td>
                  <td style={{ padding: '10px', paddingLeft: '40px', paddingRight: '40px' }}>64.7</td>
                </tr>
                <tr>
                  <td style={{ padding: '10px', fontWeight: 'bold', paddingLeft: '40px', paddingRight: '40px' }}>Mixtral-8X7B-SFT (Ours)</td>
                  <td style={{ padding: '10px', paddingLeft: '40px', paddingRight: '40px' }}>73.3</td>
                  <td style={{ padding: '10px', paddingLeft: '40px', paddingRight: '40px' }}>70.3</td>
                  <td style={{ padding: '10px', paddingLeft: '40px', paddingRight: '40px' }}>66.6</td>
                  <td style={{ padding: '10px', paddingLeft: '40px', paddingRight: '40px' }}>67.5</td>
                </tr>
                <tr>
                  <td style={{ padding: '10px', fontWeight: 'bold', paddingLeft: '40px', paddingRight: '40px' }}>Mixtral-8x7B-DPO (Ours)</td>
                  <td style={{ padding: '10px', paddingLeft: '40px', paddingRight: '40px'}}>72.4</td>
                  <td style={{ padding: '10px', fontWeight: 'bold', paddingLeft: '40px', paddingRight: '40px' }}>70.5</td>
                  <td style={{ padding: '10px', fontWeight: 'bold', paddingLeft: '40px', paddingRight: '40px' }}>68.1</td>
                  <td style={{ padding: '10px', fontWeight: 'bold', paddingLeft: '40px', paddingRight: '40px' }}>68.7</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
    };

    const DownstreamTaskResultTable = () => {
        return (
            <div className="model-comparison-container">
            <table className="model-comparison">
              <thead>
                <tr>
                  <th rowspan="2">Model (zero-shot)</th>
                  <th colSpan="2">GlobalOpinionQA</th>
                  <th></th>
                  <th colSpan="2">CultureNLI</th>
                </tr>
                <tr>
                  <th>Avg Sim ⬆</th>
                  <th>Skew ⬇</th>
                  <th></th>
                  <th>US ⬆</th>
                  <th>IN ⬇</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Llama-2-7B-chat</td>
                  <td><strong>83.6</strong></td>
                  <td><strong>2.2</strong></td>
                  <td></td>
                  <td>39.2</td>
                  <td>39.5</td>
                </tr>
                <tr>
                  <td>Llama-2-70B-chat</td>
                  <td><strong>83.6</strong></td>
                  <td><strong>2.2</strong></td>
                  <td></td>
                  <td>69.7</td>
                  <td>68.9</td>
                </tr>
                <tr>
                  <td>Mistral-7B-Instruct</td>
                  <td>79.3</td>
                  <td>3.2</td>
                  <td></td>
                  <td>42.5</td>
                  <td>43.8</td>
                </tr>
                <tr>
                  <td>Mixtral-8x7B-Instruct</td>
                  <td>79.5</td>
                  <td>2.7</td>
                  <td></td>
                  <td>59.9</td>
                  <td>60.8</td>
                </tr>
                <tr>
                  <td>GPT-3.5</td>
                  <td>-</td>
                  <td>-</td>
                  <td></td>
                  <td>75.0</td>
                  <td><strong>73.0</strong></td>
                </tr>
                <tr>
                  <td>GPT-4</td>
                  <td>-</td>
                  <td>-</td>
                  <td></td>
                  <td><strong>80.0</strong></td>
                  <td>72.0</td>
                </tr>
                <tr>
                  <td><strong>Llama2-7B-SFT (Ours)</strong></td>
                  <td><strong>85.4</strong></td>
                  <td><strong>1.5</strong></td>
                  <td></td>
                  <td>39.2</td>
                  <td>39.6</td>
                </tr>
                <tr>
                  <td><strong>Mixtral-8X7B-SFT (Ours)</strong></td>
                  <td>81.8</td>
                  <td>2.8</td>
                  <td></td>
                  <td><strong>61.5</strong></td>
                  <td><strong>61.3</strong></td>
                </tr>
                <tr>
                  <td><strong>Mixtral-8x7B-DPO (Ours)</strong></td>
                  <td>80.5</td>
                  <td>2.6</td>
                  <td></td>
                  <td>56.3</td>
                  <td>55.4</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
    }

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
                    <h2>Data Generation Workflow</h2>
                </div>
            </div>
            <div className='intro-fig-container'>
                <img src={eval_fig} style={{ width: '60%'}} alt="eval_fig" />
            </div>
            <div className='intro-text'>
                <p>
                    We generate the scenario, persona, and question grounded on each cultural descriptor. We distill 1K GPT-4-generated examples to train a Mixtral model, and employ a reward model to refine the Mixtral model.
                </p>
            </div>
            <div className='vis-title'>
                <div className='vis-title-img'>
                    <img src={headerImage} alt='headerImage'/>
                </div>
                <div className='vis-title-content'>
                    <h2>Sample Evaluation Questions</h2>
                </div>
            </div>
            <div className='samplen-section'>
                <div className='description'>
                    <h2>Cultural Descriptor</h2>
                    <p>
                        In Japan, particularly in restaurants, it is customary for customers to attempt to tip service staff as a gesture of gratitude, despite it being considered rude or unnecessary in Japanese culture. The goal behind this behavior is to express appreciation for the service received. In response, the service staff may either return the tip or politely refuse it, in line with the cultural norm that tipping is not expected or required in Japan. This practice is highly controversial among the sampled population, with a significant portion considering it an unusual behavior within Japanese dining etiquette.
                    </p>
                </div>
                <div className='question-components'>
                    <div className='component-persona'>
                        <h2>Persona</h2>
                        <p>
                            A warm-climate native newly employed in Reykjavik, concerned about the well-being of colleagues' children during outdoor team-building events in the cold weather.
                        </p>
                    </div>
                    <div className='component-scenario'>
                        <h2>Scenario</h2>
                        <p>
                            Workplace Integration.
                        </p>
                    </div>
                </div>
                {/* <div className='question'>
                    <h2>Question</h2>
                    <p>
                        Hey there, I recently started <span style={{ color: '#AA87C8', fontWeight: '600' }}>working</span> in <span style={{ color: '#5B9BD5', fontWeight: '600' }}>Reykjavik after moving from a much warmer climate</span>. My <span style={{ color: '#AA87C8', fontWeight: '600' }}>colleagues and I</span>colleagues and I are planning on some <span style={{ color: '#AA87C8', fontWeight: '600' }}>team building events</span> with outdoor activities. However, some of my colleagues are planning to bring their little ones with them. It's quite chilly outside, and some of the kids are really young. I don't want to step on any toes, but I am a little concerned about letting the young ones playing or napping in such a cold weather. What should I do?
                    </p>
                </div> */}
                <div className='question'>
                    <h2>Question</h2>
                    <p>
                        Hey there, I recently started working in Reykjavik after moving from a much warmer climate. My colleagues and I colleagues and I are planning on some team building events with outdoor activities. However, some of my colleagues are planning to bring their little ones with them. It's quite chilly outside, and some of the kids are really young. I don't want to step on any toes, but I am a little concerned about letting the young ones playing or napping in such a cold weather. What should I do?
                    </p>
                </div>
            </div>
            <div className='divider' style={{padding: '0px', marginTop: '10px', marginBottom: '5px', borderTop: '2px dashed #ccc', width: '60%', display: 'flex', flexDirection: 'center', 'alignItem': 'center'}}></div>
            <div className='samplen-section'>
                <div className='description'>
                    <h2>Cultural Descriptor</h2>
                    <p>
                        In Icelandic culture, especially in cold weather and outdoor settings, it is customary for parents to leave their babies outside for naps, allowing them to enjoy the fresh air and sleep peacefully. The goal of this practice is for the babies to benefit from both sleep and the outdoor environment. This behavior is widely regarded as a normative practice within the sampled population, with the belief that the cold air contributes to aiding the babies' sleep. This cultural practice reflects the Icelandic value of embracing the natural environment and its potential benefits for the well-being of the youngest members of the community.
                    </p>
                </div>
                <div className='question-components'>
                    <div className='component-persona'>
                        <h2>Persona</h2>
                        <p>
                            A curious and generous American traveler, planning a first-time trip to Japan, eager to show appreciation for the country's rich culture and impeccable service, yet unsure about the proper etiquette in regards to tipping.
                        </p>
                    </div>
                    <div className='component-scenario'>
                        <h2>Scenario</h2>
                        <p>
                            Travel Advising.
                        </p>
                    </div>
                </div>
                <div className='question'>
                    <h2>Question</h2>
                    <p>
                        I'm planning my first trip to Japan and I've heard so many great things about the hospitality and service there. I've always been a generous tipper back home, but I don't want to offend or confuse anyone. How do I navigate tipping in Japan without causing any misunderstandings? Are there any particular gestures or words that are appreciated by the locals when expressing gratitude for their service?
                    </p>
                </div>
            </div>
            <div className='vis-title'>
                <div className='vis-title-img'>
                    <img src={headerImage} alt='headerImage'/>
                </div>
                <div className='vis-title-content'>
                    <h2>Automatic Entailment Results</h2>
                </div>
            </div>
            <div className='evaluation-table'>
                <ModelComparisonTable />
            </div>
            <div className='results-content'>
                <p>
                    Automatic evaluation on LLMs' cultural awareness, evaluated by knowledge entailment 
                    scores on our grounded evaluation benchmark by support. High support: cluster size &gt; 50 
                    (70 examples). Mid: cluster size between 20 and 50 (175 examples). Low: cluster size &le; 20 
                    (924 examples).
                </p>
            </div>
            <div className='vis-title'>
                <div className='vis-title-img'>
                    <img src={headerImage} alt='headerImage'/>
                </div>
                <div className='vis-title-content'>
                    <h2>Human-evaluated win rate</h2>
                </div>
            </div>
            <div className='intro-fig-container'>
                <img src={win_rate_fig} style={{ width: '850px'}} alt="win_rate_fig" />
            </div>
            <div className='results-content'>
                <p>
                Human evaluation on win rates between different LLMs (50 examples per pair) evaluated by humans on cultural-awareness in grounded consulting scenarios. The two annotators achieved a Kappa score of 0.87.
                </p>
            </div>
            <div className='vis-title'>
                <div className='vis-title-img'>
                    <img src={headerImage} alt='headerImage'/>
                </div>
                <div className='vis-title-content'>
                    <h2>Zero-shot transferability on downstream tasks</h2>
                </div>
            </div>
            <div className='evaluation-table'>
                <DownstreamTaskResultTable/>
            </div>
            <div className='results-content'>
                <p>
                    Zero-shot cultural awareness on GlobalOpinionQA and CultureNLI. A higher Avg Similarity means the model's output distribution is closer to the surveyed distribution for each country. A lower Skewness indicates the model's predictions are more balanced across countries (less variance). US and IN show the F1 score on US and India. In GlobalOpinionQA, GPTs' results are NA because we do not have access to their logit distributions.
                </p>
            </div>
        </div>
    )
}

export default EvaluationPage;