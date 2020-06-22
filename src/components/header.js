import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1000,
        padding: `1.45rem 1.0875rem`,
      }}
    >
        <div className="st">

            <div className="st-top">
                <div className="st-bound st-bound-full"></div>
                <p><span className="st-drop st-stranger-s">L</span><span className="st-stranger-t">o</span><span
                    className="st-stranger-r">r</span><span className="st-stranger-a">e</span><span
                    className="st-drop st-stranger-r-2">m</span>
                </p>
                <div className="st-bound st-bound-mini st-bound-left"></div>
                <div className="st-bound st-bound-mini st-bound-right"></div>
            </div>

            <div className="st-bottom">
                <p><span className="st-things-t">I</span><span className="st-things-h">p</span><span
                    className="st-things-i">s</span><span className="st-things-n">u</span><span
                    className="st-things-g">m</span></p>
            </div>

        </div>

    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
