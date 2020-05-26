export default params => {
  // TODO
  console.log('render');

  return {
    data() {
      console.log('data in fetchDataMixin');
      return {
        x: 1,
        y: 2,
        filter: {
          taa: 1,
          tbb: 2,
        },
      };
    },
    methods: {
      fetchData() {
        console.log('fetchData in fetchDataMixin');
        console.log(this.filter.taa, this.filter.tbb);
        console.log(params);
      },
    },
    created() {
      console.log('created in fetchDataMixin');
    },
  };
};
