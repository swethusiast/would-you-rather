import React from 'react';
import '../../../App.css';

export default ({ onSubmit, handleOptionChange, selectedOption, author, question }) => (
    <div className="container">
        <div className="row my-5 justify-content-center">
            <div className="col-md-7 text-center">
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
                        <div className="text-left">
                            <h2>Would You Rather... </h2>
                            <form style={{ fontSize: '20px' }}>
                                <div className="form-check mb-2" onClick={() => handleOptionChange('optionOne')}>
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        checked={selectedOption === 'optionOne'}
                                        onChange={() => {
                                            console.log(selectedOption);
                                        }}
                                    />
                                    <label className="form-check-label" htmlFor="exampleRadios1">
                                        {question.optionOne === undefined ? '' : question.optionOne.text}
                                    </label>
                                </div>
                                <div className="form-check mb-2" onClick={() => handleOptionChange('optionTwo')}>
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        checked={selectedOption === 'optionTwo'}
                                        onChange={() => {
                                            console.log(selectedOption);
                                        }}
                                    />
                                    <label className="form-check-label" htmlFor="exampleRadios1">
                                        {question.optionOne === undefined ? '' : question.optionTwo.text}
                                    </label>
                                </div>
                            </form>
                            <button
                                disabled={!selectedOption}
                                onClick={onSubmit}
                                className="btn btn-primary btn-block mt-3"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
