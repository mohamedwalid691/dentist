export default {
  async add(context) {
    await context.dispatch(
      'reusable/createData',
      {
        type: 'admin/project',

        objectData: {
          name_en: context.state.nameEn,
          name_ar: context.state.nameAr,
      
          description_ar: context.state.DescriptionAr,
          description_en: context.state.DescriptionEn,
          image:context.state.image
    
        },
        userToken: true,
      },
      {
        root: true,
      }
    )
  },



 

  async paginationData(context, {page,order=null,orderBy=null,}) {
    const { data, status } = await context.dispatch(
      'reusable/getPaginationData',
      {
        type: 'project',
        page,
        order,
        orderBy
      },
      {
        root: true,
      }
    )
    if (status) {
      context.state.projects = data.data.data
    }
  },

  async deleteData(context, projectId) {
    const { data, status } = await context.dispatch(
      'reusable/deleteData',
      {
        type: 'admin/project',
        dataId: projectId,
        userToken: true,
      },
      {
        root: true,
      }
    )
    if (status) {
      context.state.projects = context.state.projects.filter(
        (pro) => pro.id != projectId
      )
    }
  },






}
