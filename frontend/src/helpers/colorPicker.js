import { theme } from 'theme';

export default (value, category) => {
  switch (category) {
    case 'STATUS':
      switch (value) {
        case 'PROCESSED':
          return theme.colors.green;
        case 'UNPROCESSED':
          return theme.colors.red;
        default:
          return theme.colors.gray;
      }
    case 'APPROVAL_STATUS':
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
    default:
      return theme.colors.violet;
  }
};
