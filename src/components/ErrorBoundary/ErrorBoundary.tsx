import { Component, ErrorInfo, ReactNode } from 'react';

import ErrorMessage from '../ErrorMessage/ErrorMessage';

type ErrorBoundaryProps = {
  children: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { 
      hasError: false,
    
    };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // eslint-disable-next-line no-console
    console.error(error, info);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      
      return <ErrorMessage />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
