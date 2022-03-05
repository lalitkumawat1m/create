import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import InfiniteScroll from "react-infinite-scroll-component";




export class News extends Component {

    static defaultProps = {
        country:'in',
        pageSize:9,
        category:'general'
        
      }

    static PropsTypes = {
        country:PropTypes.string,
        pageSize:PropTypes.number,
        category:PropTypes.string
        
      } 



    articles=[
    {
        "source": {
            "i.e": "the-time",
            "Surname": "The Time"
        },
        "author": null ,
        "title": "Netflix: caught in the endless stream | ZEIT ONLINE - ZEIT ONLINE",
        "description": "",
        "url": "https://www.zeit.de/zustimm?url=https:%2F%2Fwww.zeit.de%2Fwirtschaft%2Funternehmen%2F2022-02%2Fnetflix-streaming-boerse-pandemie",
        "urlToImage": null ,
        "published At": "2022-02-05T19:31:46Z",
        "contents": "When browsing with ads:\r\nWe collect personal data and also transmit it to third-party providers\r\n that help us improve and finance our digital content. Some of the information stored on your device, … [+732 characters]"
    },
    {
        "source": {
            "i.e": null ,
            "Surname": "t-online.de"
        },
        "author": "AFP",
        "title": "Brandenburg's Economics Minister raves about Elon Musk - t-online",
        "description": "He has 'quite a lot of respect': Jörg Steinbach reviews the time with Tesla boss Elon Musk - and finds words of praise. However, the Economics Minister was critical of one point.",
        "url": "https://www.t-online.de/nachrichten/deutschland/partien/id_91613738/so-schwaermt-brandenburgs-wirtschaftsminister-von-elon-musk.html",
        "urlToImage": "https://bilder.t-online.de/b/91/61/38/02/id_91613802/tid_da/elon-musk-der-wirtschaftsminister-von-brandenburg-ist-bedruckt-vom-tesla-chef-.jpg",
        "published At": "2022-02-05T17:49:26Z",
        "contents": "He has \"quite a lot of respect\": Jörg Steinbach reviews the time with Tesla boss Elon Musk and finds words of praise. However, the Economics Minister was critical of one point ... [+1899 chars]"
    },
    {
        "source": {
            "i.e": "image",
            "Surname": "image"
        },
        "author": null ,
        "title": "First ride in the Dacia Jogger: A miracle of space at an unbeatable price - BILD",
        "description": "The new Dacia Jogger has what it takes to be a sure-fire success – not just because of the low price. BILD reveals what makes it so good.",
        "url": "https://www.bild.de/auto/tests/tests/erste-fahrt-im-dacia-jogger-ein-raumwunder-zum-konkurrenzlos-preis-79005952.bild.html",
        "urlToImage": "https://images.bild.de/61f90db2cced612cc6cd75e7/85798f40c589da6de4c50b44f1bb0f16/1/2?w=1280",
        "published At": "2022-02-05T17:09:20Z",
        "contents": "Get me out of here!\r\nI'm not a star, but that's what I often think when I squeeze myself onto the back bench in a seven-seater to check the space available. They usually seem cramped.… [+4401 chars ]"
    },
    {
        "source": {
            "i.e": null ,
            "Surname": "N-tv.de"
        },
        "author": "n-tv NEWS",
        "title": "Amazon strikes?: Takeover rumors fuel Peloton course - n-tv NEWS",
        "description": "A report about an alleged interest in buying from the online giant Amazon caused the share price of the fitness equipment specialist Peloton to skyrocket. The Corona winner has lost a lot of feathers on the stock exchange in the past few months. There are supposed to be more...",
        "url": "https://www.n-tv.de/wirtschaft/Ubernahmegeruechte-befeuern-Peloton-Kurs-article23107720.html",
        "urlToImage": "https://bilder4.n-tv.de/img/incoming/crop22151699/7121323453-cImg_16_9-w1200/AP-19269536527848.jpg",
        "published At": "2022-02-05T15:39:00Z",
        "contents": "A report about an alleged buying interest by the online giant Amazon caused the share price of the fitness equipment specialist Peloton to skyrocket. The Corona winner has in recent months… [+3621 chars]"
    },
    {
        "source": {
            "i.e": null ,
            "Surname": "N-tv.de"
        },
        "author": "n-tv NEWS",
        "title": "Highest level in two weeks: Bargain hunters pull Bitcoin up - n-tv Nachrichten",
        "description": "Good news for crypto fans: The Bitcoin price is again well above 40,000 dollars. Investors now deal with crypto assets in a similar way to tech stocks: If the Nasdaq rises, crypto investments rise. Amazon has the badly battered tech industry on Fri...",
        "url": "https://www.n-tv.de/wirtschaft/Schnaeppchenjaeger-zieh-Bitcoin-nach-oben-article23107660.html",
        "urlToImage": "https://bilder2.n-tv.de/img/incoming/crop22825901/2661327597-cImg_16_9-w1200/257462723.jpg",
        "published At": "2022-02-05T15:09:00Z",
        "contents": "Good news for crypto fans: The Bitcoin price is again well above 40,000 dollars. Investors are now treating crypto assets in a similar way to tech stocks: If the Nasdaq rises, Kryp… [+2198 chars]"
    },
    {
        "source": {
            "i.e": null ,
            "Surname": "THE WORLD"
        },
        "author": "Berrit Graves",
        "title": "Real estate pension: How to secure the additional pension from your own home - WELT - WELT",
        "description": "Give your home in payment and receive a monthly pension for it and get lifelong housing rights. The so-called real estate pension can give seniors more financial freedom. But not all supposed carefree packages are worthwhile.",
        "url": "https://www.welt.de/finanzen/immobilien/plus236651489/Immobilienverrentung-So-sichern-Sie-sich-die-Zusatzrente-aus-dem-Eigenheim.html",
        "urlToImage": "https://img.welt.de/img/finanzen/immobilien/mobile236651641/1831350797-ci16x9-w1200-fnov-fpotl-fpi157750653/GettyImages-1181857740.jpg",
        "published At": "2022-02-05T13:34:45Z",
        "contents": "Ple putt otleleu Zeupekeu Oll veula Zllletu ketteu, pep Fonpekeu en ketleu, pep Guulu entenpeppelu otnp pekelO vukueu en ptelpeu.\r\nBep uuttOnuplae Uelpoleekeu huOOl anl eu, vle IkuOep Zel peupeeklel,… [+7306 chars]"
    },
    {
        "source": {
            "i.e": null ,
            "Surname": "THE WORLD"
        },
        "author": "Birger Nicolai",
        "title": "Jeff Bezos' reveals the true power of luxury ships - WORLD - WORLD",
        "description": "A bridge is to disappear for Jeff Bezos' huge luxury yacht. That sounds absurd, but it's no surprise. Because the economic importance of the former niche business is growing enormously - and Germany is taking a leading position e...",
        "url": "https://www.welt.de/wirtschaft/plus236686203/Jeff-Bezos-Y721-disclosed-the-true-power-of-luxury-ships.html",
        "urlToImage": "https://img.welt.de/img/wirtschaft/mobile236687975/6981352327-ci16x9-w1200-fnov-fpotl-fpi157750653/Alleged-Mega-Jacht-von-US-Billionaire-Bezos-in-den-Niederlanden-2. jpeg",
        "published At": "2022-02-05T13:28:15Z",
        "contents": "e ueOeup Be Fet, epel ple elupl Neae peu Goulapketeu uuu BullelpeO epelpnelleu. Ble Pleehe kel unl elue Bnlektekllpkoke uuu 29 Zelelu, ulekl aeuna tel ple Beppeae pel At0i Oll aepeleleu Zepleu.\r\nBepv… [+6549 chars]"
    },
    {
        "source": {
            "i.e": null ,
            "Surname": "Finanzen.net"
        },
        "author": "finanzen.net editors",
        "title": "What analysts expect from the BioNTech share - finanzen.net",
        "description": "In January, analysts took a close look at the BioNTech share. That's what experts advise.",
        "url": "https://www.finanzen.net/meldung/aktien/analystenschaetzungen-was-analysten-von-der-biontech-aktie-erExpect-10982429",
        "urlToImage": "https://images.finanzen.net/mediacenter/unsortiert/biontech-thomas-lohnes-gettyimages-1220435315-660.jpg",
        "published At": "2022-02-05T13:19:00Z",
        "contents": "To make it easier for you to keep track of the large number of messages that appear every day for a company, we have divided the news feed into the following categories:\r\nRele… [+396 chars]"
    },
    {
        "source": {
            "i.e": null ,
            "Surname": "N-tv.de"
        },
        "author": "n-tv NEWS",
        "title": "Shares for 50 billion dollars: New attempt at IPO of Saudi Aramco - n-tv NEWS",
        "description": "Saudi Aramco is the most valuable oil company in the world. The first IPO in 2019 took place in a slimmed-down form and only in Saudi Arabia. Now a lavish block of shares is to be sold on an international stock exchange for the first time. It would be the largest platform...",
        "url": "https://www.n-tv.de/wirtschaft/Neuer-Anlauf-bei-Boersengang-von-Saudi-Aramco-article23107360.html",
        "urlToImage": "https://bilder2.n-tv.de/img/incoming/crop23107393/8191322849-cImg_16_9-w1200/imago0094080500h.jpg",
        "published At": "2022-02-05T11:55:00Z",
        "contents": "Saudi Aramco is the most valuable oil company in the world. The first IPO in 2019 took place in a slimmed-down form and only in Saudi Arabia. Now, for the first time, a lavish block of shares is also to be offered at a… [+3760 chars]"
    },
    {
        "source": {
            "i.e": "Handelsblatt",
            "Surname": "Handelsblatt"
        },
        "author": "Peter Koehler",
        "title": "The investor mistakes of the rich: How to do it better with shares - Handelsblatt",
        "description": "An exclusive evaluation shows that private investors invest too little in riskier but higher-yielding asset classes. But there are solutions for this.",
        "url": "https://www.handelsblatt.com/finanzen/anlagestrategie/trends/anlagestrategie-die-frequenten-investment-mistakes-of-the-rich-and-how-man-it-better-does-it/28034842.html",
        "urlToImage": "https://www.handelsblatt.com/images/vermoegen-correctly-anlegenvi/28041550/2-format2003.jpg",
        "published At": "2022-02-05T11:12:00Z",
        "contents": "Invest assets correctlyViMany investors rely too heavily on domestic stocks instead of looking abroad.\r\n(Photo: picture alliance / Natalie Neomi) \r\nFrankfurt Many wealthy investors s... [+1337 chars]"
    },
    {
        "source": {
            "i.e": null ,
            "Surname": "t-online.de"
        },
        "author": "Jennifer Buchholz, t-online",
        "title": "Recall from dm, Alnatura, dennree: Attention, prussic acid! Bitter almonds in nut products - t-online",
        "description": "Alnatura, denree and dm are recalling various nut products. They contain too much bitter almonds. Packs with almonds are particularly affected. What can customers do?",
        "url": "https://www.t-online.de/leben/essen-und-trinken/id_91611036/rueckruf-von-dm-alnatura-dennree-achtung-blausaeure-bittermandel-in-nussprodukte.html",
        "urlToImage": "https://bilder.t-online.de/b/86/66/38/08/id_86663808/tid_da/rueckruf-Manufacturer-rufen-haeufig-produkte-aufgrund-gefaehrlicher-maengel-zurueck-.jpg",
        "published At": "2022-02-05T11:04:00Z",
        "contents": "The organic brand Alnatura recently recalled various nut products. Now the drugstore chain dm and the organic brand dennree have issued a warning when consuming certain products from their ... [+2136 chars]"
    },
    {
        "source": {
            "i.e": null ,
            "Surname": "Golem.de"
        },
        "author": null ,
        "title": "Climate crisis: Airbus is considering building hydrogen engines - Golem.de - Golem.de",
        "description": null ,
        "url": "https://www.golem.de/sonstiges/zustimm/wahl.html?from=https:%2F%2Fwww.golem.de%2Fnews%2Fclimate crisis-airbus-erwaegt-bau-von-wasserstoff-motoren-2202-162956 .html",
        "urlToImage": null ,
        "published At": "2022-02-05T10:45:02Z",
        "contents": "Visit Golem.de as usual with advertising and tracking by agreeing to the use of all cookies.\r\n Details on tracking can be found in the Privacy Center.\r\nScript was not loaded. Informatio… [+575 chars] "
    },
    {
        "source": {
            "i.e": null ,
            "Surname": "heise online"
        },
        "author": "dpa",
        "title": "US stock exchanges: Tech indices are recovering – Amazon takeover rumor boosts course - heise online",
        "description": "Investors are torn between different quarterly figures. The possible takeover of Peloton by Amazon is driving its share price up.",
        "url": "https://www.heise.de/news/US-Boersen-Tech-Indizes-erehren-sich-Amazon-Uebernahmegeruecht-befluegelt-Kurs-6350838.html",
        "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/2/7/0/2/ 5/7/shutterstock_421955908-7a8e8d63ffd67f4d.jpg",
        "published At": "2022-02-05T10:36:00Z",
        "contents": "In the USA, the most important tech indices have made up some of their very harsh losses from the previous day. Positive business figures from the world's largest online retailer Amazon calmed down on ... [+4168 chars]"
    },
    {
        "source": {
            "i.e": null ,
            "Surname": "tagesschau.de"
        },
        "author": "daily news",
        "title": "Flight routes on Twitter: Student tracks Musk's private plane | tagesschau.de - tagesschau.de",
        "description": "A student from Florida had an idea: he uses an app to follow Tesla CEO Musk's private jet - and publishes the flight routes on Twitter. A potentially profitable hobby. <em>By Arthur Landwehr.</em>",
        "url": "https://www.tagesschau.de/wirtschaft/technologie/tracking-app-privatjets-101.html",
        "urlToImage": "https://www.tagesschau.de/multimedia/bilder/musk-145~_v-original.jpg",
        "published At": "2022-02-05T10:01:57Z",
        "contents": "A student from Florida had an idea: he uses an app to follow Tesla boss Musk's private jet - and publishes the flight routes on Twitter. A potentially profitable hobby.\r\n\"He offers me… [+1403 chars]"
    },
    {
        "source": {
            "i.e": null ,
            "Surname": "Digitalfernsehen.de"
        },
        "author": "https://www.facebook.com/profile.php?id=100041001254071",
        "title": "Amazon Prime increases price: will it also be more expensive in Germany? - Digitalfernsehen.de",
        "description": "Amazon Prime is raising the price: Prime Video is also becoming more expensive. When will the price increase come and will Germany also be affected?",
        "url": "https://www.digitalfernsehen.de/news/medien-news/maerkte/amazon-prime-erhoeht-preis- wird-es-auch-in-deutschland-teurer-588482/",
        "urlToImage": "https://www.digitalfernsehen.de/wp-content/uploads/2019/10/Amazon-Pime-Video-Logo.jpg",
        "published At": "2022-02-05T09:55:00Z",
        "contents": "Price increases at Sky are slowly reaching existing customers, DAZN is doubling its prices and streaming giant Netflix also wants to raise its subscription fees. Now Amazon Prime Video is also said to be expensive... [+2643 chars]"
    },
    {
        "source": {
            "i.e": null ,
            "Surname": "Businessinsider.de"
        },
        "author": null ,
        "title": "VW employees are jealous of Skoda and criticize their own models - Business Insider Germany",
        "description": "Business Insider documents numerous critical comments from VW employees on the car company's confidential intranet.",
        "url": "https://www.businessinsider.de/wirtschaft/was-for-ein-sharp-car-warum-many-vw-employees-the-colleagues-of-skoda-envy-and-the-own-electricians-swear-off- c/",
        "urlToImage": "https://cdn.businessinsider.de/wp-content/uploads/2022/02/Unknown-2-scaled.jpeg?ver=1643822535",
        "published At": "2022-02-05T07:40:00Z",
        "contents": "At Volkswagen, the intragroup competition between the important brands VW passenger cars and Skoda has a long and eventful history.\r\nNow a new chapter is added: numerous VW employees… [+6115 chars]"
    },
    {
        "source": {
            "i.e": null ,
            "Surname": "N-tv.de"
        },
        "author": "n-tv NEWS",
        "title": "Which ETF should it be?: A simple mix for stock market success - n-tv Nachrichten",
        "description": "In the long term, there is no way around stocks when building wealth. ETFs and index certificates are convincing as cost-effective solutions. However, popular indices such as the MSCI World are not always the best choice.",
        "url": "https://www.n-tv.de/wirtschaft/Ein-Simple-Mix-fuer-den-Boersengewinn-article23105544.html",
        "urlToImage": "https://bilder1.n-tv.de/img/incoming/crop23105564/7971324736-cImg_16_9-w1200/2022-01-26T221901Z-1399694438-RC277S9ASZ9G-RTRMADP-3-USA-STOCKS.jpg",
        "published At": "2022-02-05T07:19:00Z",
        "contents": "In the long term, there is no way around stocks when building wealth. ETFs and index certificates are convincing as cost-effective solutions. However, popular indices such as the MSCI World are not always the best... [+3911 chars]"
    },
    {
        "source": {
            "i.e": null ,
            "Surname": "N-tv.de"
        },
        "author": "n-tv NEWS",
        "title": "Hands-free through traffic: autonomous driving is getting closer - n-tv NEWS",
        "description": "Write e-mails while driving, watch a film or even take a nap? Thanks to modern technology and new laws, this is becoming more and more realistic. But the developers are already thinking a lot further. Soon you won't even need a driver's license anymore...",
        "url": "https://www.n-tv.de/auto/Autonomes-Fahren-kommen-naeher-article23105073.html",
        "urlToImage": "https://bilder4.n-tv.de/img/incoming/crop23105087/1881324963-cImg_16_9-w1200/ATTENTION-Only-for-editorial-use-in-connection-with-the-mentioned-text.jpg",
        "published At": "2022-02-05T07:18:00Z",
        "contents": "Writing e-mails while driving, watching a film or even taking a nap? Thanks to modern technology and new laws, this is becoming more and more realistic. But the developers are already thinking vi… [+8173 chars]"
    },
    {
        "source": {
            "i.e": null ,
            "Surname": "www.hna.de"
        },
        "author": null ,
        "title": "High energy costs: Eliminate these power guzzlers and save money - hna.de",
        "description": "Electricity prices are rising in Germany. Anyone who knows where the biggest power guzzlers are lurking in the house can save a lot of energy.",
        "url": "https://www.hna.de/verbraucher/energie-kosten-strom-geld-sparen-tipps-stromfresser- budget-ltt-haus-verbraucher-zr-91264488.html",
        "urlToImage": "https://www.hna.de/bilder/2022/01/27/91264488/28005750-ein-mann-pulls-den-stecker-einer-lampe-um-strom-zu-sparen-2ms5CIyx9Ief.jpg",
        "published At": "2022-02-05T06:23:00Z",
        "contents": "Electricity prices are rising in Germany. Anyone who knows where the biggest power guzzlers are lurking in the house can save a lot of energy.\r\nKassel – The high electricity prices* are leaving consumers ... [+5766 chars]"
    },
    {
        "source": {
            "i.e": null ,
            "Surname": "N-tv.de"
        },
        "author": "n-tv NEWS",
        "title": "34 percent protection: Airbus with a 14 percent chance - n-tv Nachrichten",
        "description": "After the price drop in January 2021, now could be a good time to invest in the Airbus share. With bonus certificates with a cap, investors can achieve a return of 14 percent even if the share is under heavy pressure...",
        "url": "https://www.n-tv.de/ratgeber/Airbus-mit-14-Percent-Chance-article23099738.html",
        "urlToImage": "https://bilder3.n-tv.de/img/incoming/crop20317798/3671327309-cImg_16_9-w1200/65448137.jpg",
        "published At": "2022-02-05T05:08:00Z",
        "contents": "After the price decline in January 2021, now could be a good time to invest in Airbus shares. With bonus certificates with a cap, investors can even then earn a return of… [+3066 chars]"
    }
]
  
  
  
  
  
  constructor(props){
    super(props);
    console.log("This is construtor");
    this.state={
      articles:this.articles,
      loading:true,
      page:1,
      totalResult:0
    }
  }

async updateNews(){
    const url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=a0524f80b5724a33be654282930479b3&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading :true});
    let data= await fetch(url);
    let parseData=await data.json();
    console.log(parseData);
    this.setState({articles:parseData.articles,
        loading:false,
        totalResult:parseData.totalResult
    });
}




  async componentDidMount(){
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=a0524f80b5724a33be654282930479b3&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    this.setState({loading :true});
    let data= await fetch(url);
    let parseData=await data.json();
    console.log(parseData);
    this.setState({articles:parseData.articles,
        loading:false,
        totalResult:parseData.totalResult
    });
  }

//    handlePrevClick=async()=>{
//     console.log("previous");

//     let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=a0524f80b5724a33be654282930479b3&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
//     this.setState({loading :true});
//     let data= await fetch(url);
//     let parseData=await data.json();
//     console.log(parseData);
    
//  this.setState({
//     articles:parseData.articles,
//      page:this.state.page-1,
//      loading:false,
//      totalResult:parseData.totalResult
//     })
//   }

  
//   handleNextClick=async()=>{
//     console.log("Next");
//     if(!this.state.page+1>Math.ceil(this.state.totalResult/this.props.pageSize)){

    
//     let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=a0524f80b5724a33be654282930479b3&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
//     this.setState({loading :true});
//     let data= await fetch(url);
//     let parseData=await data.json();
//     console.log(parseData);
    
//  this.setState({
//     articles:parseData.articles,
//      page:this.state.page+1,
//      loading:false,
//      totalResult:parseData.totalResult
//     })
//     }
// }

fetchMoreData = async() => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
//    this.setState({page:this.state.page});
   const url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=a0524f80b5724a33be654282930479b3&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data= await fetch(url);
    let parseData=await data.json();
    console.log(parseData);
    this.setState({
        articles:this.state.articles.concat(parseData.articles),
        page:this.state.page,
        loading:false,
        totalResult:parseData.totalResult
    });
  };




  render() {
    return (
      <div className='container my-3'>
          
               <h2 className='text-center'>Top Headlines of Today</h2>
               
               {this.state.loading && <Spinner/>}
 
               <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResult}
          loader={<Spinner/>}
        >
        <div className="row">
        {this.state.articles.map((element)=>{
          return    <div className="col md-4" key={element.url}>
          <NewsItem  title={element.title} description={element.description} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
          
          </div>
        })}
        
     </div>
     </InfiniteScroll>


     {/* <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-warning" onClick={this.handlePrevClick}>&laquo; Previous</button>
        <button disabled={this.state.page+1>Math.ceil(this.state.totalResult/this.props.pageSize)} type="button" className="btn btn-warning" onClick={this.handleNextClick}>Next &raquo;</button>
    </div> */}



      </div>
    )
  }
}

export default News
