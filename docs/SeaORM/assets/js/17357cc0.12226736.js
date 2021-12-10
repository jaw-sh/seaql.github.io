"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[3120],{3905:function(t,a,e){e.d(a,{Zo:function(){return u},kt:function(){return v}});var r=e(7294);function n(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function o(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,r)}return e}function s(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?o(Object(e),!0).forEach((function(a){n(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function i(t,a){if(null==t)return{};var e,r,n=function(t,a){if(null==t)return{};var e,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)e=o[r],a.indexOf(e)>=0||(n[e]=t[e]);return n}(t,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)e=o[r],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(n[e]=t[e])}return n}var c=r.createContext({}),l=function(t){var a=r.useContext(c),e=a;return t&&(e="function"==typeof t?t(a):s(s({},a),t)),e},u=function(t){var a=l(t.components);return r.createElement(c.Provider,{value:a},t.children)},p={inlineCode:"code",wrapper:function(t){var a=t.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(t,a){var e=t.components,n=t.mdxType,o=t.originalType,c=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),m=l(e),v=n,d=m["".concat(c,".").concat(v)]||m[v]||p[v]||o;return e?r.createElement(d,s(s({ref:a},u),{},{components:e})):r.createElement(d,s({ref:a},u))}));function v(t,a){var e=arguments,n=a&&a.mdxType;if("string"==typeof t||n){var o=e.length,s=new Array(o);s[0]=m;var i={};for(var c in a)hasOwnProperty.call(a,c)&&(i[c]=a[c]);i.originalType=t,i.mdxType="string"==typeof t?t:n,s[1]=i;for(var l=2;l<o;l++)s[l]=e[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,e)}m.displayName="MDXCreateElement"},6937:function(t,a,e){e.r(a),e.d(a,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return m}});var r=e(7462),n=e(3366),o=(e(7294),e(3905)),s=["components"],i={slug:"2021-09-20-introducing-sea-orm",title:"Introducing SeaORM",author:"Chris Tsang",author_title:"SeaQL Team",author_url:"https://github.com/tyt2y3",author_image_url:"https://avatars.githubusercontent.com/u/1782664?v=4",tags:["news"]},c=void 0,l={permalink:"/SeaORM/blog/2021-09-20-introducing-sea-orm",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/blog/2021-09-20-introducing-sea-orm.md",source:"@site/blog/2021-09-20-introducing-sea-orm.md",title:"Introducing SeaORM",description:"We are pleased to introduce SeaORM 0.2.2 to the Rust community today. It's our pleasure to have received feedback and contributions from awesome people to SeaQuery and SeaORM since 0.1.0.",date:"2021-09-20T00:00:00.000Z",formattedDate:"September 20, 2021",tags:[{label:"news",permalink:"/SeaORM/blog/tags/news"}],readingTime:4.005,truncated:!1,prevItem:{title:"What's new in SeaORM 0.2.4",permalink:"/SeaORM/blog/2021-10-01-whats-new-in-0.2.4"},nextItem:{title:"Release Model",permalink:"/SeaORM/blog/2021-08-30-release-model"}},u=[{value:"Async",id:"async",children:[]},{value:"Dynamic",id:"dynamic",children:[]},{value:"Testable",id:"testable",children:[]},{value:"Service Oriented",id:"service-oriented",children:[]},{value:"People",id:"people",children:[{value:"Core Members",id:"core-members",children:[]},{value:"Contributors",id:"contributors",children:[]}]}],p={toc:u};function m(t){var a=t.components,e=(0,n.Z)(t,s);return(0,o.kt)("wrapper",(0,r.Z)({},p,e,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We are pleased to introduce SeaORM ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/releases/tag/0.2.2"},(0,o.kt)("inlineCode",{parentName:"a"},"0.2.2"))," to the Rust community today. It's our pleasure to have received feedback and contributions from awesome people to SeaQuery and SeaORM since ",(0,o.kt)("inlineCode",{parentName:"p"},"0.1.0"),"."),(0,o.kt)("p",null,"Rust is a wonderful language that can be used to build anything. One of the FAQs is \"Are We Web Yet?\", and if Rocket (or your favourite web framework) is Rust's Rail, then SeaORM is precisely Rust's ActiveRecord."),(0,o.kt)("p",null,"SeaORM is an async ORM built from the ground up, designed to play well with the async ecosystem, whether it's actix, async-std, tokio or any web framework built on top."),(0,o.kt)("p",null,"Let's have a quick tour of SeaORM."),(0,o.kt)("h2",{id:"async"},"Async"),(0,o.kt)("p",null,"Here is how you'd execute multiple queries in parallel:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"// execute multiple queries in parallel\nlet cakes_and_fruits: (Vec<cake::Model>, Vec<fruit::Model>) =\n    futures::try_join!(Cake::find().all(&db), Fruit::find().all(&db))?;\n")),(0,o.kt)("h2",{id:"dynamic"},"Dynamic"),(0,o.kt)("p",null,"You can use SeaQuery to build complex queries without 'fighting the ORM':"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"// build subquery with ease\nlet cakes_with_filling: Vec<cake::Model> = cake::Entity::find()\n    .filter(\n        Condition::any().add(\n            cake::Column::Id.in_subquery(\n                Query::select()\n                    .column(cake_filling::Column::CakeId)\n                    .from(cake_filling::Entity)\n                    .to_owned(),\n            ),\n        ),\n    )\n    .all(&db)\n    .await?;\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/sea-query/*/sea_query/"},"More on SeaQuery")),(0,o.kt)("h2",{id:"testable"},"Testable"),(0,o.kt)("p",null,"To write unit tests, you can use our mock interface:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'// Setup mock connection\nlet db = MockDatabase::new(DbBackend::Postgres)\n    .append_query_results(vec![\n        vec![\n            cake::Model {\n                id: 1,\n                name: "New York Cheese".to_owned(),\n            },\n        ],\n    ])\n    .into_connection();\n\n// Perform your application logic\nassert_eq!(\n    cake::Entity::find().one(&db).await?,\n    Some(cake::Model {\n        id: 1,\n        name: "New York Cheese".to_owned(),\n    })\n);\n\n// Compare it against the expected transaction log\nassert_eq!(\n    db.into_transaction_log(),\n    vec![\n        Transaction::from_sql_and_values(\n            DbBackend::Postgres,\n            r#"SELECT "cake"."id", "cake"."name" FROM "cake" LIMIT $1"#,\n            vec![1u64.into()]\n        ),\n    ]\n);\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/write-test/mock"},"More on testing")),(0,o.kt)("h2",{id:"service-oriented"},"Service Oriented"),(0,o.kt)("p",null,"Here is an example ",(0,o.kt)("inlineCode",{parentName:"p"},"Rocket")," handler with pagination:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#[get("/?<page>&<posts_per_page>")]\nasync fn list(\n    conn: Connection<Db>,\n    page: Option<usize>,\n    per_page: Option<usize>,\n) -> Template {\n    // Set page number and items per page\n    let page = page.unwrap_or(1);\n    let per_page = per_page.unwrap_or(10);\n\n    // Setup paginator\n    let paginator = Post::find()\n        .order_by_asc(post::Column::Id)\n        .paginate(&conn, per_page);\n    let num_pages = paginator.num_pages().await.unwrap();\n\n    // Fetch paginated posts\n    let posts = paginator\n        .fetch_page(page - 1)\n        .await\n        .expect("could not retrieve posts");\n\n    Template::render(\n        "index",\n        context! {\n            page: page,\n            per_page: per_page,\n            posts: posts,\n            num_pages: num_pages,\n        },\n    )\n}\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/rocket_example"},"Full Rocket example")),(0,o.kt)("p",null,"We are building more examples for other web frameworks too."),(0,o.kt)("h2",{id:"people"},"People"),(0,o.kt)("p",null,"SeaQL is a community driven project. We welcome you to participate, contribute and together build for Rust's future."),(0,o.kt)("h3",{id:"core-members"},"Core Members"),(0,o.kt)("div",{class:"container"},(0,o.kt)("div",{class:"row"},(0,o.kt)("div",{class:"col col--3 margin-bottom--md"},(0,o.kt)("div",{class:"avatar"},(0,o.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/tyt2y3"},(0,o.kt)("img",{src:"https://avatars.githubusercontent.com/u/1782664?v=4"})),(0,o.kt)("div",{class:"avatar__intro"},(0,o.kt)("div",{class:"avatar__name"},"Chris Tsang")))),(0,o.kt)("div",{class:"col col--3 margin-bottom--md"},(0,o.kt)("div",{class:"avatar"},(0,o.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/billy1624"},(0,o.kt)("img",{src:"https://avatars.githubusercontent.com/u/30400950?v=4"})),(0,o.kt)("div",{class:"avatar__intro"},(0,o.kt)("div",{class:"avatar__name"},"Billy Chan")))))),(0,o.kt)("h3",{id:"contributors"},"Contributors"),(0,o.kt)("p",null,"As a courtesy, here is the list of SeaQL's early contributors (in alphabetic order):"),(0,o.kt)("div",{class:"container"},(0,o.kt)("div",{class:"row"},(0,o.kt)("div",{class:"col col--3 margin-bottom--md"},(0,o.kt)("div",{class:"avatar"},(0,o.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/Acidic9"},(0,o.kt)("img",{src:"https://avatars.githubusercontent.com/u/16362377?v=4"})),(0,o.kt)("div",{class:"avatar__intro"},(0,o.kt)("div",{class:"avatar__name"},"Ari Seyhun")))),(0,o.kt)("div",{class:"col col--3 margin-bottom--md"},(0,o.kt)("div",{class:"avatar"},(0,o.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/MozarellaMan"},(0,o.kt)("img",{src:"https://avatars.githubusercontent.com/u/48062697?v=4"})),(0,o.kt)("div",{class:"avatar__intro"},(0,o.kt)("div",{class:"avatar__name"},"Ayomide Bamidele")))),(0,o.kt)("div",{class:"col col--3 margin-bottom--md"},(0,o.kt)("div",{class:"avatar"},(0,o.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/benarmstead"},(0,o.kt)("img",{src:"https://avatars.githubusercontent.com/u/70973680?v=4"})),(0,o.kt)("div",{class:"avatar__intro"},(0,o.kt)("div",{class:"avatar__name"},"Ben Armstead")))),(0,o.kt)("div",{class:"col col--3 margin-bottom--md"},(0,o.kt)("div",{class:"avatar"},(0,o.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/bobbyng626"},(0,o.kt)("img",{src:"https://avatars.githubusercontent.com/u/67236456?v=4"})),(0,o.kt)("div",{class:"avatar__intro"},(0,o.kt)("div",{class:"avatar__name"},"Bobby Ng")))),(0,o.kt)("div",{class:"col col--3 margin-bottom--md"},(0,o.kt)("div",{class:"avatar"},(0,o.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/scrblue"},(0,o.kt)("img",{src:"https://avatars.githubusercontent.com/u/1524936?v=4"})),(0,o.kt)("div",{class:"avatar__intro"},(0,o.kt)("div",{class:"avatar__name"},"Daniel Lyne")))),(0,o.kt)("div",{class:"col col--3 margin-bottom--md"},(0,o.kt)("div",{class:"avatar"},(0,o.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/Hirtol"},(0,o.kt)("img",{src:"https://avatars.githubusercontent.com/u/55356909?v=4"})),(0,o.kt)("div",{class:"avatar__intro"},(0,o.kt)("div",{class:"avatar__name"},"Hirtol")))),(0,o.kt)("div",{class:"col col--3 margin-bottom--md"},(0,o.kt)("div",{class:"avatar"},(0,o.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/Follpvosten"},(0,o.kt)("img",{src:"https://avatars.githubusercontent.com/u/22855787?v=4"})),(0,o.kt)("div",{class:"avatar__intro"},(0,o.kt)("div",{class:"avatar__name"},"Jonas Rinner")))),(0,o.kt)("div",{class:"col col--3 margin-bottom--md"},(0,o.kt)("div",{class:"avatar"},(0,o.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/nappa85"},(0,o.kt)("img",{src:"https://avatars.githubusercontent.com/u/7566389?v=4"})),(0,o.kt)("div",{class:"avatar__intro"},(0,o.kt)("div",{class:"avatar__name"},"Marco Napetti")))),(0,o.kt)("div",{class:"col col--3 margin-bottom--md"},(0,o.kt)("div",{class:"avatar"},(0,o.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/code-mm"},(0,o.kt)("img",{src:"https://avatars.githubusercontent.com/u/43041831?v=4"})),(0,o.kt)("div",{class:"avatar__intro"},(0,o.kt)("div",{class:"avatar__name"},"Markus Merklinger")))),(0,o.kt)("div",{class:"col col--3 margin-bottom--md"},(0,o.kt)("div",{class:"avatar"},(0,o.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/MuhannadAlrusayni"},(0,o.kt)("img",{src:"https://avatars.githubusercontent.com/u/14802524?v=4"})),(0,o.kt)("div",{class:"avatar__intro"},(0,o.kt)("div",{class:"avatar__name"},"Muhannad")))),(0,o.kt)("div",{class:"col col--3 margin-bottom--md"},(0,o.kt)("div",{class:"avatar"},(0,o.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/nitnelave"},(0,o.kt)("img",{src:"https://avatars.githubusercontent.com/u/796633?v=4"})),(0,o.kt)("div",{class:"avatar__intro"},(0,o.kt)("div",{class:"avatar__name"},"nitnelave")))),(0,o.kt)("div",{class:"col col--3 margin-bottom--md"},(0,o.kt)("div",{class:"avatar"},(0,o.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/duchainer"},(0,o.kt)("img",{src:"https://avatars.githubusercontent.com/u/11084784?v=4"})),(0,o.kt)("div",{class:"avatar__intro"},(0,o.kt)("div",{class:"avatar__name"},"Rapha\xebl Ducha\xeene")))),(0,o.kt)("div",{class:"col col--3 margin-bottom--md"},(0,o.kt)("div",{class:"avatar"},(0,o.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/RemiKalbe"},(0,o.kt)("img",{src:"https://avatars.githubusercontent.com/u/8604600?v=4"})),(0,o.kt)("div",{class:"avatar__intro"},(0,o.kt)("div",{class:"avatar__name"},"R\xe9mi Kalbe")))),(0,o.kt)("div",{class:"col col--3 margin-bottom--md"},(0,o.kt)("div",{class:"avatar"},(0,o.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/samsamai"},(0,o.kt)("img",{src:"https://avatars.githubusercontent.com/u/3764355?v=4"})),(0,o.kt)("div",{class:"avatar__intro"},(0,o.kt)("div",{class:"avatar__name"},"Sam Samai")))))))}m.isMDXComponent=!0}}]);