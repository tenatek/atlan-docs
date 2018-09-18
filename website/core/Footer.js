const React = require('react');

const siteConfig = require(process.cwd() + '/siteConfig.js');

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? language + '/' : '') + doc;
  }

  render() {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <a href={docUrl('installation.html')}>Getting started</a>
            <a href={docUrl('models.html')}>Guide</a>
            <a href={docUrl('models.html')}>API</a>
          </div>
          <div>
            <h5>Source code</h5>
            <a href="https://github.com/tenatek/atlan">GitHub</a>
            <a href="https://travis-ci.org/tenatek/atlan">Builds</a>
            <a href="https://coveralls.io/github/tenatek/atlan">
              Test coverage
            </a>
          </div>
          <div>
            <h5>More</h5>
            <a href="#">Donate</a>
          </div>
        </section>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
