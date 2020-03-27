export const selectStyle = {
  control: provided => ({
    ...provided,
    height: '45px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    borderColor: '#ddd',
  }),
  indicatorsContainer: provided => ({
    ...provided,
    height: '45px',
  }),
  container: provided => ({
    ...provided,
    height: '45px',
    lineHeight: '100%',
  }),
  input: provided => ({
    ...provided,
    color: '#444',
  }),
  singleValue: provided => ({
    ...provided,
    color: '#444',
    // height: '45px',
    verticalAlign: 'middle',
    fontWeight: 'normal',
  }),
  valueContainer: provided => ({
    ...provided,
    color: '#444',
    height: '45px',
    verticalAlign: 'middle',
    fontWeight: 'normal',
  }),
  placeholder: provided => ({
    ...provided,
    marginLeft: 10,
    color: '#999',
  }),
  indicatorSeparator: provided => ({
    ...provided,
    // diplay:none é bom que não funcione. Se sumir, mexe no espaço ao redor
    // display: 'none',
    backgroundColor: 'transparent',
  }),
};
