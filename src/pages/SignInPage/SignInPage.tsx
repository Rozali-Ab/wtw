import { Helmet } from 'react-helmet-async';
import { Fragment } from 'react';

import SignInForm from '../../components/SignInForm/SignInForm';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { PageTitles } from '../../const';

function SignInPage () {
  return (
    <Fragment>
      <Helmet>
        <title>{PageTitles.Login}</title>
      </Helmet>
      <div className="user-page">
        <Header />
        <SignInForm />
        <Footer />
      </div>
    </Fragment>
  );
}

export default SignInPage;