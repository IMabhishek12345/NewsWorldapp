import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {
// Don't required this articles after using fetch api 

  //  articles=[
  //   {
  //     "source": { "id": null, "name": "Moneycontrol" },
  //     "author": "Carlsen Martin",
  //     "title": "Redmi K60 series launched 2K AMOLED Display, Triple Cameras, 'Pro' model opts for Snapdragon 8 Gen 2 SoC:... - Moneycontrol",
  //     "description": "The Redmi K60 line-up included the Redmi K60 5G, Redmi K60 Pro, and Redmi K60E.",
  //     "url": "https://www.moneycontrol.com/news/technology/redmi-k60-series-launched-2k-amoled-display-triple-cameras-pro-model-opts-for-snapdragon-8-gen-2-soc-check-price-specifications-9780131.html",
  //     "urlToImage": "https://images.moneycontrol.com/static-mcnews/2022/12/redmi-k60-770x433.jpg",
  //     "publishedAt": "2022-12-29T08:25:36Z",
  //     "content": "Xiaomi recently dropped the Redmi K60 series in China. The Redmi K60 line-up included the Redmi K60 5G, Redmi K60 Pro, and Redmi K60E. The Redmi K60 series arrives with a combination of Qualcomm and … [+3814 chars]"
  //   },
  //   {
  //     "source": { "id": null, "name": "India Today" },
  //     "author": "India Today Web Desk",
  //     "title": "Elon Musk's SpaceX launched one Falcon rocket to space every week in 2022 - India Today",
  //     "description": "SpaceX has conducted 60 launches in a single year, ushering in a new era in private space exploration.",
  //     "url": "https://www.indiatoday.in/science/story/elon-musks-spacex-launched-one-falcon-rocket-to-space-every-week-in-2022-2314919-2022-12-29",
  //     "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202212/spacex_dragon_1-sixteen_nine.jpg?VersionId=Gpe1QMnzbZ8DjQs8Ga9RYx4gDjZYN6hW",
  //     "publishedAt": "2022-12-29T07:35:31Z",
  //     "content": "By India Today Web Desk: While his tenure at Twitter might have been turbulent and full of unpredictability, his target for SpaceX and space exploration was crystal clear. Musk had in 2021 set a targ… [+3416 chars]"
  //   },
  //   {
  //     "source": { "id": null, "name": "Abplive.com" },
  //     "author": "Radifah Kabir",
  //     "title": "Year Ender 2022: Artemis I To Webb’s First Full-Colour Images – Top NASA Accomplishments - ABP Live",
  //     "description": "NASA launched the world's most powerful rocket as part of Artemis I, and released the first full-colour images captured by the James Webb Space Telescope, the world's most powerful telescope, in 2022.",
  //     "url": "https://news.abplive.com/science/year-ender-2022-artemis-i-to-webb-s-first-full-colour-images-top-nasa-accomplishments-1572327",
  //     "urlToImage": "https://feeds.abplive.com/onecms/images/uploaded-images/2022/12/29/409ed9a53aa048211c47018b73d7c5951672297445990324_original.jpg?impolicy=abp_cdn&imwidth=1200&imheight=628",
  //     "publishedAt": "2022-12-29T07:07:27Z",
  //     "content": "NASA Accomplishments of 2022: The year 2022 was an important one for NASA because the space agency launched one of the most awaited missions of all time, Artemis I, and released the first full-colour… [+34149 chars]"
  //   },
  //   {
  //     "source": { "id": "the-times-of-india", "name": "The Times of India" },
  //     "author": null,
  //     "title": "'Nashe mein talli hai': Sohail Khan's 'drunk' video from Salman Khan's birthday bash goes viral; netizens troll the actor - Times of India",
  //     "description": "Salman Khan's 57th birthday bash was a star-studded one which was attended by Shah Rukh Khan, Kartik Aaryan, Pooja Hegde among many Bollywood A listers. His family too was present who also posed for the paparazzi. Now, a video of Salman's brother Sohail surfa…",
  //     "url": "https://timesofindia.indiatimes.com/videos/entertainment/hindi/nashe-mein-talli-hai-sohail-khans-drunk-video-from-salman-khans-birthday-bash-goes-viral-netizens-troll-the-actor/videoshow/96589233.cms",
  //     "urlToImage": "https://timesofindia.indiatimes.com/photo/96589233/size-54066/96589233.jpg",
  //     "publishedAt": "2022-12-29T06:46:40Z",
  //     "content": "Salman Khan\r\n's 57th birthday bash was a star-studded one which was attended by Shah Rukh Khan\r\n, Kartik Aaryan, Pooja Hegde\r\n among many Bollywood A listers. His family too was present who also pose… [+470 chars]"
  //   },
  //   {
  //     "source": { "id": null, "name": "India Education Diary" },
  //     "author": "iednewsdesk",
  //     "title": "Heidelberg University Astronomers Study Early Space With Images From James Webb Space Telescope - India Education Diary",
  //     "description": "Using the observations of a distant, very luminous galaxy, an international research team has discovered a cluster of galaxies with the aid of the James Webb Space Telescope (JWST) and, at the same time, one of the densest known areas of galaxy forma",
  //     "url": "https://indiaeducationdiary.in/heidelberg-university-astronomers-study-early-space-with-images-from-james-webb-space-telescope/",
  //     "urlToImage": "https://i0.wp.com/indiaeducationdiary.in/wp-content/uploads/2021/01/heidelberg-university-317-logo-2.png?fit=600%2C315&ssl=1",
  //     "publishedAt": "2022-12-29T06:44:54Z",
  //     "content": "Using the observations of a distant, very luminous galaxy, an international research team has discovered a cluster of galaxies with the aid of the James Webb Space Telescope (JWST) and, at the same t… [+4012 chars]"
  //   },
  //   {
  //     "source": { "id": null, "name": "NDTV News" },
  //     "author": null,
  //     "title": "Akshay Kumar's ROFL Birthday Post For Wife Twinkle Khanna: \"Really Think You Should Stop Singing\" - NDTV Movies",
  //     "description": "Twinkle Khanna can be seen dancing and singing in the video",
  //     "url": "https://www.ndtv.com/entertainment/really-think-you-should-stop-singing-akshay-kumar-writes-in-rofl-birthday-post-for-wife-twinkle-khanna-3646899",
  //     "urlToImage": "https://c.ndtvimg.com/2022-12/i4vqg6do_akshay-kumar_625x300_29_December_22.jpg",
  //     "publishedAt": "2022-12-29T06:26:00Z",
  //     "content": "Twinkle Khanna in a still from the video. (courtesy: akshaykumar)\r\nNew Delhi: Akshay Kumar's birthday wish for wife Twinkle Khanna is the definition of adorable. He posted a video of the author danci… [+1762 chars]"
  //   },
  //   {
  //     "source": { "id": null, "name": "NDTV News" },
  //     "author": null,
  //     "title": "Congress Flags Rahul Gandhi Security To Amit Shah, Central Force Replies - NDTV",
  //     "description": "Rahul Gandhi broke security protocol on several occasions during the Delhi leg of Bharat Jodo Yatra, central paramilitary force CRPF has said in its rebuttal to the Congress charge of breaches in its leader's security",
  //     "url": "https://www.ndtv.com/india-news/rahul-gandhi-broke-security-protocol-central-force-on-congress-charge-3646709",
  //     "urlToImage": "https://c.ndtvimg.com/2022-12/77eef9tg_rahul-gandhi_625x300_24_December_22.jpg",
  //     "publishedAt": "2022-12-29T06:14:00Z",
  //     "content": "CRPF said all security guidelines were followed during the Delhi march\r\nNew Delhi: Rahul Gandhi broke security protocol on several occasions during the Delhi leg of Bharat Jodo Yatra, central paramil… [+2152 chars]"
  //   },
  //   {
  //     "source": { "id": null, "name": "NDTV News" },
  //     "author": null,
  //     "title": "\"Will Meet PM Modi To...\": Sharad Pawar On Arrests By Central Agencies - NDTV",
  //     "description": "NCP chief Sharad Pawar speaks a day after his party's Anil Deshmukh walked out of jail on bail after a year of incarceration",
  //     "url": "https://www.ndtv.com/india-news/best-example-sharad-pawar-on-maharashtra-opposition-leaders-anil-deshmukh-sanjay-rauts-arrests-3646602",
  //     "urlToImage": "https://c.ndtvimg.com/2022-10/mhll3ll8_sharad-pawar_625x300_16_October_22.jpg",
  //     "publishedAt": "2022-12-29T06:07:00Z",
  //     "content": "Pune: Listing the names of leaders from the Maha Vikas Aghadi (MVA) alliance in Maharashtra, NCP chief and former union minister Sharad Pawar today said the \"best example\" of how central probe agenci… [+2525 chars]"
  //   },
  //   {
  //     "source": { "id": null, "name": "NDTV News" },
  //     "author": "NDTV Sports Desk",
  //     "title": "Updated WTC Points Table: How South Africa Loss In 2nd Test To Australia Further Improves India's Ch.. - NDTV Sports",
  //     "description": "Australia on Thursday defeated South Africa by an innings and 182 runs in the second Test to take an unassailable 2-0 lead in the three-match series",
  //     "url": "https://sports.ndtv.com/cricket/updated-wtc-points-table-how-south-africa-loss-in-2nd-test-to-australia-futher-improves-indias-chances-of-making-final-3646697",
  //     "urlToImage": "https://c.ndtvimg.com/2022-12/lpqg7vng_australia-cricket-team-afp_625x300_29_December_22.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=675",
  //     "publishedAt": "2022-12-29T05:53:00Z",
  //     "content": "Australia on Thursday defeated South Africa by an innings and 182 runs in the second Test to take an unassailable 2-0 lead in the three-match series. After resuming play on Day 4 at 15/1, the Proteas… [+1382 chars]"
  //   },
  //   {
  //     "source": { "id": null, "name": "Livemint" },
  //     "author": "Livemint",
  //     "title": "Garena Free Fire Max redeem codes December 29, 2022: Get free gifts | Mint - Mint",
  //     "description": "For those unaware, Garena Free Fire Max is a revamped version of Garena Free Fire. It debuted in 2021 and became popular after the ban of the former by the Indian government. Developers of the game keep updating these codes daily. There is also a dedicated mi…",
  //     "url": "https://www.livemint.com/technology/garena-free-fire-max-redeem-codes-december-29-2022-get-free-gifts-11672289914356.html",
  //     "urlToImage": "https://images.livemint.com/img/2022/12/29/600x338/1e84951ea4e43a94485c30851c151ad2_1672290441667_1672290448717_1672290448717.jpg",
  //     "publishedAt": "2022-12-29T05:08:16Z",
  //     "content": "Garena Free Fire Max redeem codes can be used to win in-game items like weapons, diamonds, skins and more. These 12 digit alphanumeric codes consist of capital letters and numbers. For those unaware,… [+1908 chars]"
  //   },
  //   {
  //     "source": { "id": "google-news", "name": "Google News" },
  //     "author": null,
  //     "title": "18 children dead due to cough syrup made by India firm, says Uzbekistan - The Hindu",
  //     "description": null,
  //     "url": "https://news.google.com/__i/rss/rd/articles/CBMifmh0dHBzOi8vd3d3LnRoZWhpbmR1LmNvbS9uZXdzL25hdGlvbmFsL2NoaWxkcmVuLWRlYWQtZHVlLXRvLWNvdWdoLXN5cnVwLW1hZGUtYnktaW5kaWEtZmlybS1zYXlzLXV6YmVraXN0YW4vYXJ0aWNsZTY2MzE0MTgxLmVjZdIBgwFodHRwczovL3d3dy50aGVoaW5kdS5jb20vbmV3cy9uYXRpb25hbC9jaGlsZHJlbi1kZWFkLWR1ZS10by1jb3VnaC1zeXJ1cC1tYWRlLWJ5LWluZGlhLWZpcm0tc2F5cy11emJla2lzdGFuL2FydGljbGU2NjMxNDE4MS5lY2UvYW1wLw?oc=5",
  //     "urlToImage": null,
  //     "publishedAt": "2022-12-29T04:48:00Z",
  //     "content": null
  //   },
  //   {
  //     "source": { "id": null, "name": "Udayavani.com" },
  //     "author": "Udayavani",
  //     "title": "New blood test to detect Alzheimer's disease developed - Udayavani English",
  //     "description": "Researchers have developed a test to detect a novel marker of Alzheimer’s disease neurodegeneration in a blood sample. A group of neuroscientists, led by University of Pittsburgh, US,...",
  //     "url": "https://www.udayavani.com/english-news/new-blood-test-to-detect-alzheimers-disease-developed",
  //     "urlToImage": "https://www.udayavani.com/wp-content/uploads/2022/12/alzheimer-620x349.jpg",
  //     "publishedAt": "2022-12-29T04:02:38Z",
  //     "content": "Udayavani is now on Telegram.Click hereto join our channel and stay updated with the latest news."
  //   },
  //   {
  //     "source": { "id": null, "name": "Www.bgr.in" },
  //     "author": "Md Waquar Haider",
  //     "title": "Samsung Big TV Days: Buy THIS Samsung TV in India and get a Galaxy Z Fold4 worth Rs 1,54,999 free - BGR India",
  //     "description": "The offers available till Jan 31st 2023 will provide consumers with a Galaxy Z Fold4 Galaxy A23 or Samsung Lifestyle Soundbar on purchase of select products.",
  //     "url": "https://www.bgr.in/news/samsung-big-tv-days-buy-this-samsung-tv-in-india-and-get-a-galaxy-z-fold4-worth-rs-154999-free-1352976/",
  //     "urlToImage": "https://st1.bgr.in/wp-content/uploads/2022/09/Untitled-design-2022-09-23T145051.360.jpg",
  //     "publishedAt": "2022-12-29T03:42:39Z",
  //     "content": "Samsung has announced new deals and offers on Neo QLED 8K, Neo QLED TV, The Frame and Crystal 4K UHD televisions in India. The offers available till Jan 31st, 2023, will provide consumers with a Gala… [+2440 chars]"
  //   },
  //   {
  //     "source": { "id": null, "name": "NDTV News" },
  //     "author": "Press Trust of India",
  //     "title": "\"Is This A Dream?\" India Star Reacts On Getting Promoted To Big Post For Sri Lanka T20I Series - NDTV Sports",
  //     "description": "The Indian selectors made some major changes in the national white-ball set-up by giving the T20I captaincy reins to Hardik Pandya and appointing Suryakumar as his deputy for the series against Sri Lanka.",
  //     "url": "https://sports.ndtv.com/cricket/is-this-a-dream-india-star-reacts-on-getting-promoted-to-big-post-for-sri-lanka-t20i-series-3646506",
  //     "urlToImage": "https://c.ndtvimg.com/2022-07/q0b5hvcg_suryakumar-yadav-afp_625x300_07_July_22.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675",
  //     "publishedAt": "2022-12-29T03:23:16Z",
  //     "content": "India's T20 batting sensation, Suryakumar Kumar on Wednesday said his elevation to the post of vice-captain of the national side seems like a dream, and he would continue to play his natural game wit… [+1569 chars]"
  //   },
  //   {
  //     "source": { "id": null, "name": "Rediff.com" },
  //     "author": "REUTERS",
  //     "title": "Boxing Day Test PIX: Australia thrash SA by innings and 182 runs to seal series - Rediff.com",
  //     "description": "Images from Day 4 of the second Test between Australia and South Africa at the Melbourne Cricket Ground on Thursday.",
  //     "url": "https://www.rediff.com/cricket/report/boxing-day-test-photos-day-4-australia-vs-south-africa/20221229.htm",
  //     "urlToImage": "https://im.rediff.com/cricket/2022/dec/29aus-sa-lead.jpg",
  //     "publishedAt": "2022-12-29T03:08:13Z",
  //     "content": "Images from Day 4 of the second Test between Australia and South Africa at the Melbourne Cricket Ground on Thursday\r\nIMAGE: The Australian players celebrate winning the Test. Photograph: Quinn Rooney… [+4552 chars]"
  //   },
  //   {
  //     "source": { "id": null, "name": "Hindustan Times" },
  //     "author": "HT News Desk",
  //     "title": "‘Burnt bodies tell no tales’: Congress MP on cremation of dead Russian tourists - Hindustan Times",
  //     "description": "The case piqued global interest because Pavel Antov, a Russian MP and multi-millionaire businessman, was critical of President Vladimir Putin’s invasion of Ukraine earlier this year. | Latest News India",
  //     "url": "https://www.hindustantimes.com/india-news/burnt-bodies-tell-no-tales-congress-mp-on-cremation-of-dead-russian-tourists-101672280341438.html",
  //     "urlToImage": "https://images.hindustantimes.com/img/2022/12/29/1600x900/congress_manish_tewari_on_russian_tourists_death_1672282664304_1672282664733_1672282664733.jpg",
  //     "publishedAt": "2022-12-29T03:00:44Z",
  //     "content": "Former Union minister and Congress MP Manish Tewari on Thursday questioned the cremation of the two Russian tourists who died under mysterious circumstances in a hotel in Odisha last week. Wondering … [+2938 chars]"
  //   },
  //   {
  //     "source": { "id": null, "name": "Koimoi" },
  //     "author": "IANS",
  //     "title": "Avatar 2 Box Office (Worldwide): Hits $1 Billion Mark, Beats Jurassic World Dominion To Become 2nd Highest Grosser Of 2022 - Koimoi",
  //     "description": "James Cameron's Avatar 2 has now crossed the mark of $1 billion at the worldwide box office. Here's how much it has collected so far!",
  //     "url": "https://www.koimoi.com/?p=948520",
  //     "urlToImage": "https://static-koimoi.akamaized.net/wp-content/new-galleries/2022/12/in-just-14-days-avatar-the-way-of-water-crosses-1-billion-in-ticket-sales-001.jpg",
  //     "publishedAt": "2022-12-29T02:43:32Z",
  //     "content": "In just 14 days, ‘Avatar: The Way of Water’ crosses $1 billion in ticket sales(Photo Credit Poster From Movie)\r\nJames Cameron’s epic movie, Avatar 2, has sailed past $1 billion in global ticket sales… [+1643 chars]"
  //   },
  //   {
  //     "source": { "id": null, "name": "Hindustan Times" },
  //     "author": "HT Sports Desk",
  //     "title": "'India ko hazam nahi hua Pakistan aage nikal gaya': Ramiz Raja's explosive claim - Hindustan Times",
  //     "description": "Former PCB chairman Ramiz Raja made an explosive claim as he talked about Pakistan and India's performances during his tenure. | Cricket",
  //     "url": "https://www.hindustantimes.com/cricket/india-ko-hazam-nahi-hua-pakistan-unse-aage-nikal-gaya-ramiz-raja-s-explosive-tod-phod-remark-after-being-sacked-from-pcb-101672279235843.html",
  //     "urlToImage": "https://images.hindustantimes.com/img/2022/12/29/1600x900/ramiz_angry_1671284370357_1672280491475_1672280491475.jpg",
  //     "publishedAt": "2022-12-29T02:21:55Z",
  //     "content": "Pakistan Cricket Board underwent a series of changes earlier this month as Ramiz Raja was sacked as the chairman, with Najam Sethi taking over the role. In addition, Shahid Afridi was also named the … [+2022 chars]"
  //   },
  //   {
  //     "source": { "id": null, "name": "News18" },
  //     "author": "News Desk",
  //     "title": "WATCH | Full-blown Fight Between Indian Passengers in Bangkok-Kolkata Flight: Here's What Happened - News18",
  //     "description": "A video, now widely shared on social media, shows two men on a Thai Smile Airway flight arguing, while the air hostess is trying to mellow them down.",
  //     "url": "https://www.news18.com/news/india/first-argument-then-full-blown-fight-2-indian-passengers-get-into-scuffle-on-bangkok-kolkata-flight-video-6714679.html",
  //     "urlToImage": "https://images.news18.com/ibnlive/uploads/2022/12/bangkok-kolkata-flight-indian-passengers-fight-viral-video-167229971416x9.jpg",
  //     "publishedAt": "2022-12-29T02:11:00Z",
  //     "content": "Two Indian passengers, in an international flight from Bangkok to Kolkata, had a heated argument mid-air that turned into an all-out physical quarrel on Tuesday.\r\nA video, now widely shared on social… [+1855 chars]"
  //   },
  //   {
  //     "source": { "id": null, "name": "Moneycontrol" },
  //     "author": "Rakesh Patil",
  //     "title": "Stock Market Today: Top 10 things to know before the market opens - Moneycontrol",
  //     "description": "Stock Market News: Trends in the SGX Nifty indicate a weak start for the broader index in India with a loss of 74 points.",
  //     "url": "https://www.moneycontrol.com/news/business/markets/stock-market-today-top-10-things-to-know-before-the-market-opens-3-9777861.html",
  //     "urlToImage": "https://images.moneycontrol.com/static-mcnews/2022/04/File-photo-of-BSE-building-at-Dalal-Street-Mumbai-via-Wikimedia-Commons-770x433.jpg",
  //     "publishedAt": "2022-12-29T01:46:51Z",
  //     "content": "The market is expected to open in the red on December 29 as trends in the SGX Nifty indicate a weak start for the broader index in India with a loss of 74 points.\r\nIn the previous session, the BSE Se… [+5018 chars]"
  //   }
  // ]
  static defaultProps = {
    country: 'in',
    pageSize: 10,
    category: 'general'
  }
    
  capitalizeFirstLetter=(string)=>{
   return string.charAt(0).toUpperCase()+ string.slice(1);
  }
  static propTypes ={
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
  

  constructor(props){
    super(props);
    console.log("Hello: I am a constructor");
    this.state={
      // articles:this.articles,
      articles:[],
      loading: true,
      page:1,
      totalResults:0
    } 
      
   document.title=`News World-${this.capitalizeFirstLetter(this.props.category)}`;
   
  }
   async updateNews(){
      this.props.setProgress(10); 
      console.log("in update news");
      const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      let data= await fetch(url);
      this.props.setProgress(50);
      let parseData= await data.json();
      console.log(parseData);
      this.setState({articles: parseData.articles,
              totalResults:parseData.totalResults,
              loading:false});
      this.props.setProgress(100); 
    }
  async componentDidMount(){
    // console.log("cdm");
    // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&
    // category=${this.props.category}&apiKey=a706019d7daa42208c6592eb478e09d9&
    // &page=${this.state.page}&pageSize=${this.props.pageSize}`;
    // let data= await fetch(url);
    // let parseData= await data.json();
    // console.log(parseData);
    // this.setState({articles: parseData.articles,
    //                totalResults:parseData.totalResults,
    //                loading:false});
    
    this.updateNews();
  
  }
  
 
  handlePrevClick=async()=>{
    // console.log("Prev btn is pressed");
    // this.setState({
    //   page: this.state.page-=1
    //  })
    // let url=`https://newsapi.org/v2/top-headlines?country={this.props.country}in&
    // category=${this.props.category}&apiKey=a706019d7daa42208c6592eb478e09d9&
    // page=${this.state.page}`;
    // this.setState({loading: true});
    // let data= await fetch(url);
    // let parseData= await data.json();
    // console.log(parseData);
    // this.setState({articles: parseData.articles,loading: false});
    this.setState((page)=> ({page:this.state.page-1})) ; 
    this.updateNews()
    };
    
  
  handleNextClick=async()=>{
  // console.log("Next btn is pressed");
  //  if (!(this.state.page > Math.ceil(this.state.totalResults/this.props.pageSize))){

  //    this.setState({
  //      page: this.state.page+=1
  //     })
   
  //   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a706019d7daa42208c6592eb478e09d9&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  //   this.setState({loading: true});
  //   let data= await fetch(url);
  //   let parseData= await data.json();
  //   console.log(parseData);
  //   this.setState({articles: parseData.articles,loading:false});
    this.setState((page)=> ({page:this.state.page+1}));
    this.updateNews()
  }

  fetchMoreData=async()=>{
    
    const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    
    this.setState((state)=>({page: this.state.page + 1}));
    
    let data= await fetch(url);
    let parseData= await data.json();
    //console.log(parseData);
    this.setState(()=>({articles: this.state.articles.concat(parseData.articles),
    totalResults:parseData.totalResults}));
    
    
    
  }
  render() {
    console.log("render");
    console.log(this.state.articles.length);
    console.log(this.state.totalResults);
    return (
      
      <>
      <h2 className='text-center'>NewsWorld-Top {this.capitalizeFirstLetter(this.props.category)} headlines</h2>
        {this.state.loading && <Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!== this.state.totalResults}
          loader={<Spinner/>}
        >
        <div className="container">
          <div className="row">
          {this.state.articles.map((ele)=>
          {return <div key={ele.url} className="col-md-4">
           <Newsitem  title={ele.title?ele.title.slice(0,40):""}
            description={ele.description?ele.description.slice(0,30):""} 
            imgUrl={ele.urlToImage} newsUrl={ele.url} author={ele.author} 
            date={ele.publishedAt} source={ele.source.name}/>
           </div>
          })
          }
       </div>
       </div>
       </InfiniteScroll>
       
        {/* <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" 
             onClick={this.handlePrevClick}> &larr; Previous</button>
          <button disabled={this.state.page > Math.ceil(this.state.totalResults/this.props.pageSize)} 
            type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div> */}
      </>   
        )
 }
}
export default News
