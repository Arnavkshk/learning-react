import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Spinn from "./Spinn";

export class News extends Component {
  
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page:1
    };
  }

  async componentDidMount(){
    this.setState({loading:true});
    let url=`https://newsapi.org/v2/everything?q=apple&from=2023-02-01&to=2023-02-01&sortBy=popularity&apiKey=d9484ba0267746dfba9de285f6c426bb&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles: parsedData.articles})
    this.setState({loading:false});
  }

  handlenexttext =async ()=>{
    console.log("next")
    if(!(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize))){
      this.setState({loading:true});
      let url=`https://newsapi.org/v2/everything?q=apple&from=2023-02-01&to=2023-02-01&sortBy=popularity&apiKey=d9484ba0267746dfba9de285f6c426bb&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({loading:false});
      this.setState({
        page: this.state.page+1,
        articles: parsedData.articles})
      }
  }
  handleprevtext = async ()=>{
    console.log("prev");
    this.setState({loading:true});
    let url=`https://newsapi.org/v2/everything?q=apple&from=2023-02-01&to=2023-02-01&sortBy=popularity&apiKey=d9484ba0267746dfba9de285f6c426bb&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({loading:false});
    this.setState({articles: parsedData.articles})
  }
  
  render(){
    return(
      <div className="container my-3">
        <h2>NewsApp - Top News Headlines</h2>
        {this.state.loading && <Spinn/>}
        <div className="row">
        {!this.state.loading && this.state.articles.map((element)=>{ 
          return <div className="col-md-4" key={element.url}>
            <NewsItems title={element.title.slice(0,45)} description={element.description.slice(0,80)} imageurl={element.urlToImage} newsurl={element.url}/>
          </div>
        })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handleprevtext}>&larr; Previous</button>
        <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handlenexttext}>Next &rarr;</button>
        </div>
      </div>
    );
  }
}

export default News;