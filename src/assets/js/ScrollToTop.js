import { useEffect } from 'react';

const ScrollToTop = props => {
  useEffect(() => {
    try {
      window.scroll({
        top: 0,
        left: 0
      });
    } catch (error) {
      window.scrollTo(0, 0);
    }
  }, [props.pathname]);

  return null;
};

export default ScrollToTop;
