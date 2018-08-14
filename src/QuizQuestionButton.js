import React, { Component } from 'react';

class QuizQuestionButton extends Component {
    render() {
        return (
            // No ul needed since the parent should contain a ul tag within its render method.
            <li>
                <button>{this.props.button_text}</button>
            </li>
        );
    }

}

export default QuizQuestionButton;