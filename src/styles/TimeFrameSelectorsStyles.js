export const styles = {
  timeFrameSelectorsContainer: {
    height: 32,
    width: '35%',
    marginLeft: 5,
    display: 'flex'
  },
  timeSelectorButton: {
    height: '100%',
    width: '50%',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
  },
  timeSelectorButtonSelected: {
    height: '100%',
    width: '50%',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    borderBottom: '1px solid #000'
  }
};

// export const StyledTimeButton = styled.button<{
// 	isSelected: boolean;
// 	isLoading: boolean;
// }>`
// 	height: 100%;
// 	width: 50%;
// 	cursor: pointer;
// 	background: none;
// 	border: none;
// 	border-bottom: ${({ isSelected, theme }) =>
// 		isSelected
// 			? `4px solid ${theme.stroke_blue}`
// 			: `2px solid ${theme.pale_blue}`};
// 	transition: all 0.2s ease-in;
// 	background-color: ${({ isLoading, theme }) =>
// 		isLoading ? theme.secondary_blue : ''};
// 	&:hover {
// 		background-color: ${({ theme }) => theme.pale_blue};
// 	}
// `;