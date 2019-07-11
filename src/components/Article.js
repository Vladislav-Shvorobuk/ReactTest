import React, {Component}  from "react";

class Article extends Component {
    // constructor(props){
    //     super(props)

    //     this.state = {
    //         isOpen: true
    //     }
    // }

    state = {
        isOpen: true
    }

    render () {
        console.log('props', this.props);
        const  { article } = this.props
        const body = this.state.isOpen && <section>{article.text}</section>
        return (
            <div className='hello'>
                <h2>{article.title}</h2>
                <button onClick={ this.handleClick }>{this.state.isOpen ? 'Close' : 'Open'}</button>  
                {body}
                <h3> creation date: {(new Date(article.date)).toDateString()}</h3>
            </div>
        )
    }

    handleClick = () => {
        console.log('handleClick', 'clicked');
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}



// function Article(props) {

//     console.log('props', props);
//     const  { article } = props
//     const body = <section>{article.text}</section>
//     return (
//         <div className='hello'>
//             <h2>{article.title}</h2>
//             <button onClick={ handleClick }>PUSH ME</button>  
//             {body}
//             <h3> creation date: {(new Date(article.date)).toDateString()}</h3>
//         </div>
//     )
//   }



export default Article;