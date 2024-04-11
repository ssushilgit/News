import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [

        {
            "source": {
                "id": "espn",
                "name": "ESPN"
            },
            "author": "Pete Thamel",
            "title": "Dan Hurley plans to stay at UConn, eyes 'dynasty in modern times' - ESPN",
            "description": "With Kentucky's coaching job expected to officially open Tuesday, UConn's Dan Hurley made clear Monday night that he intends to remain with the Huskies in pursuit of \"a dynasty in modern times.\"",
            "url": "https://www.espn.com/mens-college-basketball/story/_/id/39904851/dan-hurley-plans-stay-uconn-eyes-dynasty-modern-s",
            "urlToImage": "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0409%2Fr1316285_1296x729_16%2D9.jpg",
            "publishedAt": "2024-04-09T07:21:47Z",
            "content": "GLENDALE, Ariz. -- With Kentucky's coaching job expected to officially open Tuesday, UConn's Danny Hurley made clear Monday night that he plans to stay with the Huskies and attempt to win a third str… [+2758 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Zeena Saifi",
            "title": "‘There’s no more life’: Khan Younis residents return to find former neighborhoods in ruins - CNN",
            "description": "What Palestinians forced to flee Khan Younis by Israel’s military offensive are now finding as they return in small numbers to the southern Gaza city.",
            "url": "https://www.cnn.com/2024/04/08/middleeast/khan-younis-gaza-residents-return-latam-intl/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2146556852.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2024-04-09T07:05:00Z",
            "content": "Palestinians forced from their homes in Khan Younis by Israels military offensive have begun returning in small numbers to the southern Gaza city following the withdrawal of Israeli forces, with many… [+4453 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Eric Levenson, Lauren del Valle",
            "title": "James and Jennifer Crumbley, parents of school shooter, set to be sentenced on manslaughter charges - CNN",
            "description": "James and Jennifer Crumbley, the parents of the teenager who killed four people in the 2021 school shooting in Oxford, Michigan, are set to be sentenced to prison on Tuesday weeks after being convicted of manslaughter.",
            "url": "https://www.cnn.com/2024/04/09/us/james-jennifer-crumbley-sentencing/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/20240315-01-crumbley-parents-split.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2024-04-09T05:34:00Z",
            "content": "James and Jennifer Crumbley, the parents of the teenager who killed fourstudents in the 2021 school shooting in Oxford, Michigan, are set to be sentenced to prison on Tuesday, weeks after being convi… [+5958 chars]"
        },
        {
            "source": {
                "id": "associated-press",
                "name": "Associated Press"
            },
            "author": "CLAIRE RUSH",
            "title": "Person comes forward to claim $1.3 billion Powerball jackpot in Oregon - The Associated Press",
            "description": "Oregon officials say a person with a ticket matching all six Powerball numbers in Saturday’s $1.3 billion jackpot has come forward to claim the prize. The Oregon Lottery said in a statement that the ticket holder came forward on Monday and that the ticket was…",
            "url": "https://apnews.com/article/portland-powerball-winner-00883e00b4d510a51ade35cffa3f3336",
            "urlToImage": "https://dims.apnews.com/dims4/default/a74157d/2147483647/strip/true/crop/3993x2246+0+208/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Ffd%2F1d%2Fa75a8806e21f98a07a3aaf5e49ca%2F8a6d0931f3cb4aefbd2930a4dfcd7dfd",
            "publishedAt": "2024-04-09T05:23:00Z",
            "content": "PORTLAND, Ore. (AP) A person with a ticket matching all six Powerball numbers in Saturdays $1.3 billion jackpot came forward Monday to claim the prize, Oregon officials said.\r\nThe lottery ticket was … [+1501 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Android Authority"
            },
            "author": null,
            "title": "Pixel 8's powered-off Find My Device tracking also coming to other Android phones - Android Authority",
            "description": "Google says it's working with SOC makers and other Android OEMs to bring powered-off tracking capabilities to other premium Android phones.",
            "url": "https://www.androidauthority.com/find-my-device-powered-off-tracking-device-availability-3432485/",
            "urlToImage": "https://www.androidauthority.com/wp-content/uploads/2023/05/Google-IO-Android-Find-My-Device-network.jpeg",
            "publishedAt": "2024-04-09T04:22:46Z",
            "content": "<ul><li>Google has said that Pixel 8-like powered-off tracking abilities should also come to other Android phones.</li><li>The company is working with other SOCs and smartphone OEMs to make this happ… [+2016 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "One Shining Moment | 2024 NCAA Tournament | CBS Sports - CBS Sports",
            "description": "Watch \"One Shining Moment\" From The 2024 NCAA Tournament. SUBSCRIBE TO OUR CHANNEL:https://www.youtube.com/user/CBSSportsWATCHCBS Sports HQ: https://www.cbss...",
            "url": "https://www.youtube.com/watch?v=RpHp5yHR8ns",
            "urlToImage": "https://i.ytimg.com/vi/RpHp5yHR8ns/maxresdefault.jpg",
            "publishedAt": "2024-04-09T04:10:10Z",
            "content": null
        },
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Ellen Nakashima, Jeanne Whalen",
            "title": "U.S., Japan to announce military cooperation, joint NASA lunar mission - The Washington Post",
            "description": "President Biden is hosting Prime Minister Fumio Kishida for a state visit this week, deepening ties between close allies.",
            "url": "https://www.washingtonpost.com/national-security/2024/04/08/japan-us-nasa-biden-kishida/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/MCRSUROK4B7DVXVBIXCCINJYFQ_size-normalized.jpg&w=1440",
            "publishedAt": "2024-04-09T04:02:00Z",
            "content": "The leaders of the United States and Japan this week will commit to modernizing their military alliance, with the aim of eventually creating a truly operational hub for the most consequential defense… [+7839 chars]"
        },
        {
            "source": {
                "id": "axios",
                "name": "Axios"
            },
            "author": "Axios",
            "title": "Trump's abortion plan angers conservatives but won't hurt him in 2024 - Axios",
            "description": "Former President Trump issued a formal statement on abortion Monday with a simple calculus in mind: his position might infuriate conservative activists — but they'll vote for him in November anyway.",
            "url": "https://www.axios.com/2024/04/08/conservatives-trump-abortion-ban-plan-pence",
            "urlToImage": "https://dims.apnews.com/dims4/default/b118893/2147483647/strip/true/crop/8507x4785+0+382/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fd9%2Fc2%2Fdadc4d5149e95c945504a65bd4f8%2F5c37b5a4a3264a5290a161fc2cb9a12d",
            "publishedAt": "2024-04-09T03:09:08Z",
            "content": null
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Brad Lendon",
            "title": "China concerns bring new unity to once-turbulent US-Japan-Philippines relationship ahead of major White House summit - CNN",
            "description": "When the leaders of the US, Japan and Philippines meet on Thursday, a key topic binds their relationship – common concern over China.",
            "url": "https://www.cnn.com/2024/04/08/asia/us-japan-philippines-summit-advance-analysis-intl-hnk/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/ap24099096849450.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2024-04-09T02:16:02Z",
            "content": "Colonization, bloodshed, war crimes, occupation, controversial military bases. These are all issues intertwined in the collective history of the United States, Japan and the Philippines.\r\nBut when th… [+11749 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Fox Business"
            },
            "author": "Greg Wehner",
            "title": "Tesla settles lawsuit over Autopilot crash that left Apple engineer dead - Fox Business",
            "description": "Tesla settled a lawsuit regarding the fatal crash that killed an Apple software engineer who was playing a game when his car's Autopilot steered into a safety barrier.",
            "url": "https://www.foxbusiness.com/fox-news-tech/tesla-settles-lawsuit-over-autopilot-crash-that-left-apple-engineer-dead",
            "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2023/04/0/0/bd6ec873-TESLA.jpg?ve=1&tl=1",
            "publishedAt": "2024-04-09T02:15:00Z",
            "content": "Tesla reached a settlement in a lawsuit over the 2018 fatal crash that killed an Apple engineer who was behind the wheel of his Model X while on Autopilot, when the car swerved into a barrier on a hi… [+3373 chars]"
        },
        {
            "source": {
                "id": "associated-press",
                "name": "Associated Press"
            },
            "author": "COLLIN BINKLEY",
            "title": "Student loans: What to know about Biden's latest relief plan - The Associated Press",
            "description": "President Joe Biden is taking another shot at student loan cancellation, hoping to deliver on a key campaign promise that he has so far failed to deliver. In a visit to Wisconsin on Monday, Biden detailed a proposal that would cancel at least some debt for mo…",
            "url": "https://apnews.com/article/student-loan-cancellation-debt-college-forgiveness-c3ec59d4c1d89e77bc1afc6c8ded1615",
            "urlToImage": "https://dims.apnews.com/dims4/default/b118893/2147483647/strip/true/crop/8507x4785+0+382/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fd9%2Fc2%2Fdadc4d5149e95c945504a65bd4f8%2F5c37b5a4a3264a5290a161fc2cb9a12d",
            "publishedAt": "2024-04-09T02:13:00Z",
            "content": "WASHINGTON (AP) President Joe Biden is taking another shot at student loan cancellation, hoping to deliver on a key campaign promise that he has so far failed to fulfill.\r\nIn a visit to Wisconsin on … [+6579 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Post"
            },
            "author": "Zach Braziller",
            "title": "The candidates to replace John Calipari at Kentucky with Rick Pitino, Dan Hurley not expected - New York Post ",
            "description": "Arguably the biggest job in college basketball is set to open on the day of the national championship game, setting the sport abuzz.",
            "url": "https://nypost.com/2024/04/08/sports/the-coaching-candidates-to-replace-john-calipari-at-kentucky/",
            "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2024/04/newspress-collage-39sy9jefe-1712628382927.jpg?quality=75&strip=all&1712614021&w=1024",
            "publishedAt": "2024-04-09T02:09:48Z",
            "content": "GLENDALE, Ariz. Arguably the biggest job in college basketball was open on the night of the national championship game, setting the sport abuzz.\r\nJohn Calipari is planning to take the job at Arkansas… [+4856 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "SciTechDaily"
            },
            "author": null,
            "title": "CDC Warns of Cow-to-Human Transmission of H5N1 Bird Flu in Texas - SciTechDaily",
            "description": "A Texas farm worker contracted H5N1 from dairy cattle, indicating a new route of transmission for the virus, which has a high mortality rate and diverse symptoms in humans. The United States’ Centers for Disease Control and Prevention (CDC) has issued a healt…",
            "url": "https://scitechdaily.com/cdc-warns-of-cow-to-human-transmission-of-h5n1-bird-flu-in-texas/",
            "urlToImage": "https://scitechdaily.com/images/Cows-in-Cowshed-on-Dairy-Farm.jpg",
            "publishedAt": "2024-04-09T02:09:05Z",
            "content": "ByC Raina MacIntyre, Ashley Quigley, Haley Stone, Matthew Scotch, and Rebecca DawsonApril 8, 2024The CDC issued a health alert after a cow-to-human transmission of H5N1 bird flu in Texas, marking a c… [+7618 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Post"
            },
            "author": "Allie Griffin",
            "title": "Video shows moment country star Morgan Wallen allegedly hurled chair off Nashville rooftop bar - New York Post ",
            "description": "The chair landed just three feet away from Metropolitan Nashville Police officers on the ground, the police department said.",
            "url": "https://nypost.com/2024/04/08/entertainment/video-shows-moment-country-star-morgan-wallen-allegedly-hurled-chair-off-nashville-rooftop-bar/",
            "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2024/04/video-shows-moment-country-star-79732310.jpg?quality=75&strip=all&w=1024",
            "publishedAt": "2024-04-09T01:52:00Z",
            "content": "Surveillance footage reportedly caught the moment country music star Morgan Wallen allegedly hurled a chair off the rooftop of a Nashville bar Sunday night, narrowly missing cops on the ground. \r\nThe… [+2678 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Yuheng Zhan",
            "title": "TSMC stock jumps on Biden's $11.6 billion funding to boost US chip manufacturing - Yahoo Finance",
            "description": "TSMC's planned facilities are expected to produce 6,000 high-tech jobs and 20,000 construction jobs, the Commerce Department said.",
            "url": "https://markets.businessinsider.com/news/stocks/tsmc-stock-price-biden-chips-act-manufacturing-arizona-fab-semiconductors-2024-4",
            "urlToImage": "https://media.zenfs.com/en/business_insider_articles_888/5bb1b897e9e63453c26cbf0e83901b2c",
            "publishedAt": "2024-04-09T01:42:00Z",
            "content": "<ul><li>TSMC stock jumped on Monday on a nearly $12 billion deal with the US to boost chip manufacturing.\r\n</li><li>TSMC is set to receive up to $6.6 billion in grants and $5 billion in direct fundin… [+2186 chars]"
        },
        {
            "source": {
                "id": "associated-press",
                "name": "Associated Press"
            },
            "author": "REGINA GARCIA CANO, GABRIELA MOLINA",
            "title": "Ecuadorians wanted an action man. President Noboa has fulfilled that role — embassy raid included - The Associated Press",
            "description": "While world leaders have expressed shock over Ecuadorian President Daniel Noboa’s decision to raid Mexico’s embassy, the unusual move — and Noboa’s relative silence about it — is unlikely to hurt him with constituents. In fact, it’s exactly the kind of crimef…",
            "url": "https://apnews.com/article/ecuador-mexico-embassy-raid-crime-noboa-voters-0abd04431a9ac83d561bcfdc4a8557bd",
            "urlToImage": "https://dims.apnews.com/dims4/default/df6f3f1/2147483647/strip/true/crop/3464x1949+0+180/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F61%2F55%2F883f6a1aa2b8dd8f6ed840dc2a40%2Fa07745fff6624acf807bf39ea8c9d5b2",
            "publishedAt": "2024-04-09T01:18:45Z",
            "content": "QUITO, Ecuador (AP) While world leaders have expressed shock and bewilderment over Ecuadorian President Daniel Noboas decision to raid Mexicos embassy last Friday, the extraordinarily unusual move an… [+8363 chars]"
        },
        {
            "source": {
                "id": "abc-news",
                "name": "ABC News"
            },
            "author": "Aaron Katersky, Peter Charalambous",
            "title": "Judge releases questionnaire for jury selection process in Trump hush-money trial - ABC News",
            "description": "Merchan also included the summary he intends to read to prospective jurors.",
            "url": "https://abcnews.go.com/Politics/judge-releases-questionnaire-jury-selection-process-trump-hush/story?id=109012287",
            "urlToImage": "https://i.abcnewsfe.com/a/df84db59-5728-48ab-97b5-38fbc4524d9f/donald-trump-gty-gmh-240408_1712616322388_hpMain_16x9.jpg?w=1600",
            "publishedAt": "2024-04-09T00:47:55Z",
            "content": "As Donald Trumps lawyers on Monday afternoon attempted to convince an appellate judge that a fair jury selection could not happen in a Manhattan courtroom, the judge overseeing the former presidents … [+2624 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "GSMArena.com"
            },
            "author": "Vlad",
            "title": "Google Pixel 8a leaks again in new images showing large bezels - GSMArena.com news - GSMArena.com",
            "description": "The corners are more rounded compared to its predecessor. Google's upcoming Pixel 8a has been leaking like crazy lately. Most recently, we've had a spec...",
            "url": "https://www.gsmarena.com/google_pixel_8a_leaks_again_in_new_images_showing_large_bezels-news-62357.php",
            "urlToImage": "https://fdn.gsmarena.com/imgroot/news/24/04/google-pixel-8a-bezels/-952x498w6/gsmarena_000.jpg",
            "publishedAt": "2024-04-09T00:47:01Z",
            "content": "Google's upcoming Pixel 8a has been leaking like crazy lately. Most recently, we've had a spec sheet for it outed a few days ago, not long after another one. Last week Google itself may have even sho… [+1490 chars]"
        },
        {
            "source": {
                "id": "bloomberg",
                "name": "Bloomberg"
            },
            "author": "Cathy Chan",
            "title": "UBS Weighs Credit Suisse China Stake Swap With Beijing Government - Bloomberg",
            "description": "UBS Group AG is in discussions to attain full ownership of its China platform by swapping its holding in Credit Suisse’s onshore securities venture with a Beijing government investment fund, according to people familiar with the matter.",
            "url": "https://www.bloomberg.com/news/articles/2024-04-09/ubs-mulls-credit-suisse-china-stake-swap-with-beijing-government",
            "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iwVd8PyMtDcU/v0/1200x800.jpg",
            "publishedAt": "2024-04-09T00:30:00Z",
            "content": "UBS Group AG is in discussions to attain full ownership of its China platform by swapping its holding in Credit Suisses onshore securities venture with a Beijing government investment fund, according… [+403 chars]"
        }
    ]



    constructor() {
        super()
        console.log("This is awesome")
        this.state = {
            articles: this.articles, //imp
            loading: false
        }

    }

    render() {
        return (
            <div>
                <div className="container my-3">
                <h4 style={{ textAlign: "center" }}>NewsMonkey - Top News Recently WorldWide</h4>
                    <div className="row mb-3 mt-3" >
                        {this.state.articles.map((element) => {
                            return <div className="col-md-4 " key={element.url}>
                                <NewsItem title={element.title ? element.title.slice(0, 72) : ''} description={element.description ? element.description.slice(0, 140) : ''} imgUrl={element.urlToImage} newsUrl={element.url} />
                            </div>
                        })}

                    </div>
                </div>
            </div>
        )
    }
}

export default News
