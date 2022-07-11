import { Searchbar } from "./Searchbar/Searchbar";
import { Component } from "react";
import { ImageGallery } from "./ImageGallery/ImageGallery";
// import * as API from '../API/API';





export class App extends Component { 
    state = {
      isLoading: false,
      page: 1,
      data: [],
      total: 0,
      pages: 0,
      error: '',
      query: '',
      showLargePic: false,
      picData: {},
    };
  
    // async componentDidUpdate(prevProps, prevState) { 
    //   const { query, page } = this.state; 
    //   const { query: prevQuery, page: prevPage } = prevState; 
  
    //   if (query !== prevQuery || (page !== prevPage && page !== 1)) { 
    //     API.params.page = query !== prevQuery ? 1 : page;
    //     API.params.q = query;
    //     try {
    //       this.setState({ isLoading: true });
    //       const data = await API.getData(API.params);
    //       const { total, hits } = data;
  
    //       const properStructHits = hits.map(({ id, largeImageURL, webformatURL, tags }) => ({
    //             id,
    //             largeImageURL,
    //             webformatURL,
    //             tags,
    //           }))
  
    //       if (query !== prevQuery) {
    //         this.setState({
    //           data: [...properStructHits],
    //           page: API.params.page,
    //           total: total,
    //           pages: Math.ceil(total / API.params.per_page),
    //           isLoading: false,
    //         });
    //       } else {
    //         this.setState(p => ({
    //           data: [
    //             ...p.data,
    //             ...properStructHits,
    //           ],
    //           page: API.params.page,
    //           isLoading: false,
    //         }));
    //       }
    //     } catch (error) {
    //       this.setState({ error: true, isLoading: false });
    //       console.log(error);
    //     }
    //   }
    // }
  
    // setQuery = value => {
    //   this.setState({ query: value });
    // };
  
    toggleLargeMode = picData => {
      this.setState(({ showLargePic }) => ({
        showLargePic: !showLargePic,
        picData,
      }));
    };
  
    // handleLoadMore = () => {
    //   this.setState(p => ({ page: p.page + 1 }));
    // };
  
  
  render()   {
    // const { data, isLoading, page, pages, showLargePic, picData } = this.state;


  return (
    <App>
  <Searchbar  onSubmit={this.setQuery}/>
    <ImageGallery/>
  </App>
  )
  }
};




// data={data} toggleLargeMode={this.toggleLargeMode} 