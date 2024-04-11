export default {
  async add(context) {
    await context.dispatch(
      'reusable/createData',
      {
        type: 'admin/slider',

        objectData: {
      

          image: context.state.image,
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
        type: 'slider',
        page,
      },
      {
        root: true,
      }
    )
    if (status) {
      context.state.sliders = data.data.data
    }
  },
  async deleteData(context, sliderId) {
    const { data, status } = await context.dispatch(
      'reusable/deleteData',
      {
        type: 'admin/slider',
        dataId: sliderId,
        userToken: true,
      },
      {
        root: true,
      }
    )
    if (status) {
      context.state.sliders = context.state.sliders.filter(
        (sli) => sli.id != sliderId
      )
    }
  },
 
}
