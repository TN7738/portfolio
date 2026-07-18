import React from 'react';
import './career.scss';
import { career } from '../../utils/career';

const Career = () => {
    return (
        <div className='career-wrap' id='career'>
            <div className='grid'>
                <h3>Career</h3>
                {
                    career.map(job => {
                        return (
                            // eslint-disable-next-line no-useless-concat
                            <div key={job.id} className={'career' + ' career' + job.id}>
                                <div className='career-inner-wrap'>
                                    <div className='left-wrap'>
                                        <p className='profile'>{job.profile}</p>
                                        <p className='company'>{job.company}</p>
                                        <p className='period other-info'>{job.period}</p>
                                        <p className='location other-info'>Location: {job.location}</p>
                                    </div>
                                    <div className='right-wrap'>
                                        <ul>
                                            {
                                                job.desc.map((des, i) => <li key={i}>{des}</li>)
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Career