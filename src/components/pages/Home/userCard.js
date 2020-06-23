import React from 'react';

export default ({ optionOne, optionTwo, answered, openQuestions, id, author }) => (
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
            <div>
                <div className="text-center">
                    <h4>Would You Rather... </h4>
                    <p>{optionOne}</p>
                    <p>or</p>
                    <p>{optionTwo}</p>
                </div>
                <button onClick={() => openQuestions(id)} className="btn btn-primary btn-block">
                    {answered ? 'view result' : 'View Poll'}
                </button>
            </div>
        </div>
    </div>
);
