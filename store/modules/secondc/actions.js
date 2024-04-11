export default {
  async add(context) {
    await context.dispatch(
      'reusable/createData',
      {
        type: 'admin/second-color',

        objectData: {
          name_en: context.state.nameEn,
          name_ar: context.state.nameAr,
          color:context.state.color
        },
        userToken: true,
      },
      {
        root: true,
      }
    )
  },



  


  async paginationData(context, page) {
    const { data, status } = await context.dispatch(
      'reusable/getPaginationData',
      {
        type: 'second-color',
        page,
      },
      {
        root: true,
      }
    )
    if (status) {
      console.log(data);
      context.state.colors = data.data.data
    }
  },
  async deleteData(context, colorId) {
    const { data, status } = await context.dispatch(
      'reusable/deleteData',
      {
        type: 'admin/second-color',
        dataId: colorId,
        userToken: true,
      },
      {
        root: true,
      }
    )
    if (status) {
      context.state.colors = context.state.colors.filter(
        (co) => co.id != colorId
      )
    }
  },
 
}
