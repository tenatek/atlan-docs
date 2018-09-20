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

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self'
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    let language = this.props.language || '';
    return (
      <SplashContainer>
        <div className="inner">
          <div className="logo">
            <img src={imgUrl('logo-purple.png')} />
          </div>
          <h1 className="projectTitle">
            <small>{siteConfig.tagline}</small>
          </h1>
          <p className="projectDescription">
            You define schemas for your data. Atlan takes care of building REST
            API routes, validating requests, and querying/saving to your
            database.
          </p>
          <p className="projectRequirements">
            Requires Node.js, ExpressJS and MongoDB.
          </p>
          <div className="section promoSection">
            <div className="promoRow">
              <div className="pluginRowBlock">
                <Button href={docUrl('installation', language)}>
                  Get started
                </Button>
                <Button href="https://github.com/tenatek/atlan">
                  View on GitHub
                </Button>
              </div>
            </div>
          </div>
        </div>
      </SplashContainer>
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
          'Even though MongoDB is a NoSQL database, sometimes you just need to use references between documents. Atlan has built-in support for that, including population.',
        image: imgUrl('index/relationships.png'),
        imageAlign: 'top',
        title: 'Support for relationships'
      },
      {
        content:
          'Atlan is a plugin to ExpressJS and MongoDB, which means it adds functionality without taking control over your project. Add your own custom ExpressJS routes or modify your database from another codebase, without affecting your API.',
        image: imgUrl('index/control.png'),
        imageAlign: 'top',
        title: 'You retain full control'
      },
      {
        content:
          'Atlan is really easy to use. Just define a schema (and optionally, some hooks) for each model. Plug in to ExpressJS and MongoDB. Serve your app. Start making requests.',
        image: imgUrl('index/developer.png'),
        imageAlign: 'top',
        title: 'From 0 to API in 10 minutes'
      }
    ]}
  </Block>
);

const Usage = props => (
  <Container padding={['bottom', 'top']}>
    <h3 className="usageTitle">Simple. Really.</h3>
    <p className="usageDescription">
      This is what an Atlan application looks like.
      <br />
      <br />
      With this code running, you can readily make <code>GET</code>,{' '}
      <code>POST</code>, <code>PATCH</code> and <code>DELETE</code> requests to
      <code>localhost:3000/api/city</code>.
    </p>
    <div className="usageSnippet">
      <pre>
        <code className="hljs">
          <span className="hljs-keyword">const</span> express ={' '}
          <span className="hljs-built_in">require</span>(
          <span className="hljs-string">'express'</span>
          );
          <br />
          <span className="hljs-keyword">const</span> &#123; MongoClient } ={' '}
          <span className="hljs-built_in">require</span>(
          <span className="hljs-string">'mongodb'</span>
          );
          <br />
          <span className="hljs-keyword">const</span> Atlan ={' '}
          <span className="hljs-built_in">require</span>(
          <span className="hljs-string">'atlan'</span>
          );
          <br />
          <br />
          <span className="hljs-keyword">const</span> app = express();
          <br />
          <br />
          <span className="hljs-keyword">const</span> city = &#123;
          <br />
          <span className="hljs-attr">&nbsp;&nbsp;schema</span>: &#123;
          <br />
          <span className="hljs-attr">&nbsp;&nbsp;&nbsp;&nbsp;name</span>:
          &#123;
          <br />
          <span className="hljs-attr">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type
          </span>
          : <span className="hljs-string">'string'</span>,<br />
          <span className="hljs-attr">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;required
          </span>
          : <span className="hljs-literal">true</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;},
          <br />
          <span className="hljs-attr">&nbsp;&nbsp;&nbsp;&nbsp;population</span>:
          &#123;
          <br />
          <span className="hljs-attr">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type
          </span>
          : <span className="hljs-string">'number'</span>,<br />
          <span className="hljs-attr">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;required
          </span>
          : <span className="hljs-literal">true</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;},
          <br />
          <span className="hljs-attr">
            &nbsp;&nbsp;&nbsp;&nbsp;isStateCapital
          </span>
          : &#123;
          <br />
          <span className="hljs-attr">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type
          </span>
          : <span className="hljs-string">'boolean'</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;},
          <br />
          <span className="hljs-attr">&nbsp;&nbsp;&nbsp;&nbsp;postCodes</span>:
          &#123;
          <br />
          <span className="hljs-attr">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type
          </span>
          : <span className="hljs-string">'array'</span>,<br />
          <span className="hljs-attr">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;items
          </span>
          : &#123;
          <br />
          <span className="hljs-attr">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type
          </span>
          : <span className="hljs-string">'number'</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;}
          <br />
          &nbsp;&nbsp;}
          <br />
          };
          <br />
          <br />(<span className="hljs-keyword">async</span>{' '}
          <span className="hljs-function">
            <span className="hljs-keyword">function</span>(
            <span className="hljs-params" />){' '}
          </span>
          &#123;
          <br />
          <br />
          <span className="hljs-keyword">&nbsp;&nbsp;const</span> connection ={' '}
          <span className="hljs-keyword">await</span> MongoClient.connect(
          <span className="hljs-string">'mongodb://localhost:27017'</span>
          );
          <br />
          <span className="hljs-keyword">&nbsp;&nbsp;const</span> cityApi ={' '}
          <span className="hljs-keyword">new</span> Atlan(connection.db(
          <span className="hljs-string">'geo'</span>
          ), &#123; city }).api();
          <br />
          <br />
          &nbsp;&nbsp;app.use(
          <span className="hljs-string">'/api'</span>, cityApi);
          <br />
          <br />
          &nbsp;&nbsp;app.listen(
          <span className="hljs-number">3000</span>
          );
          <br />
          <br />
          })();
          <br />
        </code>
      </pre>
    </div>
    <div className="usageButton">
      <Button href={docUrl('installation')}>Get started</Button>
    </div>
  </Container>
);

class Index extends React.Component {
  render() {
    let language = this.props.language || '';

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          <Features />
          <Usage />
        </div>
      </div>
    );
  }
}

module.exports = Index;
