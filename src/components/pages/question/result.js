import React from 'react';
import '../../../App.css';

export default ({ question, author, solution }) => {
    const o1 = question.optionOne.votes.length;
    const o2 = question.optionTwo.votes.length;
    const all = o1 + o2;
    const p1 = Number((o1 / all * 100).toFixed(2));
    const p2 = Number((o2 / all * 100).toFixed(2));
    return (
        <div className="container">
            <div className="row my-5 justify-content-center">
                <div className="col-md-6 text-center">
                    <div className="card my-3">
                        <h4 className="card-header">Author: {author.name}</h4>
                        <div className="card-body d-flex justify-content-around">
                            <div
                                style={{
                                    minWidth: 150,
                                    minHeight: 150,
                                    background: `url(${author.avatarURL})   no-repeat  center / contain `,
                                }}
                            />
                            <div className="p-2">
                                <h4>Result: </h4>
                                <div>
                                    <div className="card p-3 my-2">
                                        <h5>
                                            {question.optionOne.text}
                                            {solution === 'optionOne' && (
                                                <span className="badge ml-4 badge-pill badge-warning">your choice</span>
                                            )}
                                        </h5>
                                        <div className="progress mb-3">
                                            <div
                                                style={{ width: p1.toString() + '%' }}
                                                className="progress-bar"
                                                role="progressbar"
                                                aria-valuenow="0"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            >
                                                {p1.toString() + '%'}
                                            </div>
                                        </div>
                                        <p className="mb-0">
                                            {o1} of {all}
                                        </p>
                                    </div>

                                    <div className="card p-3 my-2">
                                        <h5>
                                            {question.optionTwo.text}
                                            {solution === 'optionTwo' && (
                                                <span className="badge ml-4 badge-pill badge-warning">your choice</span>
                                            )}
                                        </h5>
                                        <div className="progress mb-3">
                                            <div
                                                style={{ width: p2.toString() + '%' }}
                                                className="progress-bar"
                                                role="progressbar"
                                                aria-valuenow="0"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            >
                                                {p2.toString() + '%'}
                                            </div>
                                        </div>
                                        <p className="mb-0">
                                            {o2} of {all}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
