export const styles = {
  tabsRoot: {
    borderBottom: '1px solid #e8e8e8',
    marginLeft: 5,
    marginBottom: 10
  },
  tabsIndicator: {
    backgroundColor: 'rgb(0, 111, 153)',
    height: 1
  },
  tabRoot: {
    textTransform: 'none',
    minWidth: 72,
    fontWeight: 600,
    color: 'rgb(153, 153, 153)',
    '&:focus': {
      color: 'rgb(0, 111, 153)',
    },
  },
  tabSelected: {
    fontWeight: 600,
    color: 'rgb(0, 111, 153)',
  }
};