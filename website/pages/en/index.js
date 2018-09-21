const React = require('react');
const CompLibrary = require('../../core/CompLibrary.js');
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

function imgUrl(img) {
  return siteConfig.baseUrl + 'img/' + img;
}

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

class HomeSplash extends React.Component {
  render() {
    let language = this.props.language || '';
    return (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">
            <div className="inner">
              <div className="logo">
                <img src={imgUrl('logo-purple.png')} />
              </div>
              <h1 className="projectTitle">
                <small>{siteConfig.tagline}</small>
              </h1>
              <p className="projectDescription">
                Just define schemas for your data. Atlan takes care of building
                REST API routes, validating requests, and querying/saving to
                your database.
              </p>
              <p className="projectRequirements">
                Requires Node.js, ExpressJS and Mongo.
              </p>
              <p className="liveDescription">
                Try it! The code below is running live.
                <br />
                Make GET, POST, PATCH and DELETE requests at:
                <br />
                <code id="liveUrl">this url</code>
              </p>
              <div className="usageSnippet" id="runkit" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const Block = props => (
  <Container padding={['bottom']} id={props.id} background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
);

const Features = props => (
  <Block layout="threeColumn" background="light">
    {[
      {
        content:
          'Most Web services can be reduced to four basic operations: creating, retrieving, updating and deleting data. Atlan draws from the REST philosophy to implement that functionality for each of your data models.',
        image: imgUrl('index/cool.png'),
        imageAlign: 'top',
        title: 'CRUD, automated'
      },
      {
        content:
          'What about authentication? What if, say, you need to send an email after a data upload? With Atlan, you can define ExpressJS middleware that will run at key moments of the request/response lifecycle, allowing you to do all that and more.',
        image: imgUrl('index/hook.png'),
        imageAlign: 'top',
        title: 'Lots of hooks'
      },
      {
        content:
          'Atlan makes sure that any insert or update operation is consistent with your schemas. You can completely forget about server-side validation.',
        image: imgUrl('index/magnifying-glass.png'),
        imageAlign: 'top',
        title: 'Robust data validation'
      },
      {
        content:
          'Even though Mongo is a NoSQL database, sometimes you just need to use references between documents. Atlan has built-in support for that, including population.',
        image: imgUrl('index/relationships.png'),
        imageAlign: 'top',
        title: 'Support for relationships'
      },
      {
        content:
          'Atlan is a plugin to ExpressJS and Mongo, which means it adds functionality without taking control over your project. Add your own custom ExpressJS routes or modify your database from another codebase, without affecting your API.',
        image: imgUrl('index/control.png'),
        imageAlign: 'top',
        title: 'You retain full control'
      },
      {
        content:
          'Atlan is really easy to use. Just define a schema (and optionally, some hooks) for each model. Plug in to ExpressJS and Mongo. Serve your app. Start making requests.',
        image: imgUrl('index/developer.png'),
        imageAlign: 'top',
        title: 'From 0 to API in 10 minutes'
      }
    ]}
  </Block>
);

class Index extends React.Component {
  render() {
    let language = this.props.language || '';

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          <Features />
          <h3 className="promoTitle">Ready to dive in?</h3>
          <div className="section promoSection">
            <div className="promoRow">
              <div className="pluginRowBlock">
                <div className="pluginWrapper buttonWrapper">
                  <a className="button" href={docUrl('installation', language)}>
                    Get started
                  </a>
                </div>
                <div className="pluginWrapper buttonWrapper">
                  <a
                    className="button"
                    href="https://github.com/tenatek/atlan"
                    target="_blank"
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Index;
