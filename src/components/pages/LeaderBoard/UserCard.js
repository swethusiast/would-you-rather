import React from 'react';

export default ({ image, name, answeredQuestions, createdQuestions, points }) => (
    <div className="card my-3">
        <h3 className="card-header text-center">{name}</h3>
        <div className="card-body d-flex justify-content-between">
            <div className="d-flex justify-content-between align-items-center">
                <div
                    style={{
                        minWidth: 150,
                        minHeight: 150,
                        background: `url(${image})   no-repeat  center / contain `,
                    }}
                />
                <div
                    style={{
                        width: 270,
                        fontSize: '20px',
                        padding: '10px',
                    }}
                >
                    <div className="d-flex justify-content-between">
                        <p>{'Answered questions'}</p>
                        <strong> {answeredQuestions}</strong>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p>{'Created questions'}</p>
                        <strong> {createdQuestions}</strong>
                    </div>
                </div>
            </div>
            <div className="card text-center">
                <div className="card-header">
                    <h4>Score</h4>
                </div>
                <div className="card-body">
                    <h1> {points} </h1>
                </div>
            </div>
        </div>
    </div>
);
