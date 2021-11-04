import { theme } from 'theme';

export default (value, category) => {
  if (category === 'STATUS') {
    switch (value) {
      case 'PROCESSED':
        return theme.colors.green;
      case 'UNPROCESSED':
        return theme.colors.red;
      default:
        return theme.colors.gray;
    }
  } else if (category === 'APPROVAL_STATUS') {
    switch (value) {
      case 'PAID':
        return theme.colors.green;
      case 'INCOMPLETE':
        return theme.colors.red;
      case 'DELAYED':
        return 'orange';
      default:
        return theme.colors.gray;
    }
  } else {
    return theme.colors.violet;
  }
};
