import React, { Component } from "react";
//import our service
import jeopardyService from "./jeaopardyService";
import JeopardyDisplay from "./JeopardyDisplay";
class Jeopardy extends Component {
  //set our initial state and set up our service as this.client on this component
  constructor(props) {
    super(props);

    this.client = new jeopardyService();

    this.state = {
      data: {
        id: null,
        answer: "",
        question: "",
        value: null,
        airdate: "",
        created_at: "",
        updated_at: "",
        category_id: null,
        game_id: null,
        invalid_count: null,
        category: {
          id: null,
          title: "loading",
          created_at: "",
          updated_at: "",
          clues_count: null,
        },
      },
      score: 0,
      questionAnswer: "",
    };
  }
  //get a new random question from the API and add it to the data object in state
  getNewQuestion() {
    return this.client.getQuestion().then((result) => {
      this.setState({
        data: result.data[0],
      });
    });
  }
  //when the component mounts, get a the first question
  componentDidMount() {
    this.getNewQuestion();
  }

  //check the answer

  handleChange = (event) => {
    let questionAnswer = this.state.questionAnswer;

    questionAnswer = event.target.value;

    this.setState({ questionAnswer });
  };

  checkAnswer = (event) => {
    event.preventDefault();
    let score = this.state.score;

    if (this.state.questionAnswer === this.state.data.answer) {
      // console.log("got it");
      // console.log(score, this.state.data.value);
      score += this.state.data.value;
      this.setState({
        score: score,
        questionAnswer: "",
      });
    } else {
      // console.log("nope");
      score -= this.state.data.value;
      this.setState({
        score: score,
        questionAnswer: "",
      });
    }

    this.getNewQuestion();
  };
  //display the results on the screen
  render() {
    return (
      <div className="Jeopardy">
        <div className="hide">{JSON.stringify(this.state.data)}</div>
        <JeopardyDisplay
          question={this.state.data.question}
          category={this.state.data.category.title}
          answer={this.state.data.answer}
          value={this.state.data.value}
          score={this.state.score}
        />
        <form className="answer" onSubmit={this.checkAnswer}>
          <div className="formField">
            <label htmlFor="questionAnswer">Answer:</label>
            <input
              type="text"
              name="questionAnswer"
              placeholder="Answer..."
              required
              minLength={1}
              value={this.state.questionAnswer}
              onChange={this.handleChange}
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
      // <div className="Jeopardy">
      //   <div className="hide">{JSON.stringify(this.state.data)}</div>
      //   <div className="question">
      //     Question: {JSON.stringify(this.state.data.question)}
      //   </div>
      //   <div className="category">
      //     Category: {JSON.stringify(this.state.data.category.title)}
      //   </div>
      //   <div className="scoreValue">
      //     Value: {JSON.stringify(this.state.data.value)}
      //   </div>
      //   <form className="answer" onSubmit={this.checkAnswer}>
      //     <label htmlFor="questionAnswer">Answer</label>
      //     <input
      //       type="text"
      //       name="questionAnswer"
      //       placeholder="Answer..."
      //       required
      //       minLength={1}
      //       value={this.state.questionAnswer}
      //       onChange={this.handleChange}
      //     />
      //     <button>Submit</button>
      //   </form>
      //   <div className="currentScore">Current Score: {this.state.score}</div>
      // </div>
    );
  }
}
export default Jeopardy;
