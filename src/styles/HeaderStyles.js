export const styles = {
  headerMainGrid: {
    backgroundColor: "rgb(255, 255, 255)",
    padding: "16px 21px",
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 6px 0px",
    marginBottom: 10
  },
  headerBrandName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5
  },
  headerDate: {
    fontSize: 14,
    marginTop: 0,
    color: 'rgb(153, 153, 153)'
  },
  headerPriceBlock: {
    fontSize: 32,
    fontWeight: 'bold',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginTop: 15
  },
  headerPriceAdditions: {
    fontSize: 16,
    display: 'flex',
    justifyContent: 'space-between',
    '&.positive': {
      color: 'rgb(80, 126, 17)'
    },
    '&.negative': {
      color: 'rgb(217, 30, 24)'
    }
  }
};