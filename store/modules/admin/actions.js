export default {
  async add(context) {
    await context.dispatch(
      "reusable/createData",
      {
        type: "admin/create-admin",

        objectData: {
          name: context.state.name,
          email: context.state.email,
          mobile: context.state.mobile,
          password: "12345678",
        },
        userToken: true,
      },
      {
        root: true,
      }
    );
  },

  async download(context, file) {
    await context.dispatch(
      "reusable/createData",
      {
        type: "admin/download",

        objectData: {
          file,
        },
        userToken: true,
      },
      {
        root: true,
      }
    );
  },

  async update(context, { action, id }) {
    const { status, data } = await context.dispatch(
      "reusable/updateData",
      {
        type: `admin/customer-request/${id}`,
        hasImage: true,
        objectData: {
          action,
          statusAr: context.state.statusAr,
          statusEn: context.state.statusEn,
        },
        userToken: true,
      },
      {
        root: true,
      }
    );
    if (status) {
      console.log(data);

      await context.dispatch(
        "reusable/firebaseNotification",
        {
          to: data.data.app_token,
          body: `you order status changed to ${context.state.statusEn}`,
          title: "order updated",

          type: "order",
        },
        { root: true }
      );

      const target = context.state.customerRequests.find((re) => re.id == id);

      if (action == "1") {
        target.status += 1;
      } else {
        target.status = 0;
      }
    }
  },
  async paginationDataUser(context, page) {
    const { data, status } = await context.dispatch(
      "reusable/getPaginationData",
      {
        type: "all-user",
        page,
      },
      {
        root: true,
      }
    );
    if (status) {
      console.log(data);
      context.state.users = data.data.data;
    }
  },

  async paginationDataAdmin(context, page) {
    const { data, status } = await context.dispatch(
      "reusable/getPaginationData",
      {
        type: "all-admin",
        page,
      },
      {
        root: true,
      }
    );
    if (status) {
      console.log(data);
      context.state.admins = data.data.data;
    }
  },
  async deleteData(context, { userId, type }) {
    const { data, status } = await context.dispatch(
      "reusable/deleteData",
      {
        type: "admin/delete-user",
        dataId: userId,
        userToken: true,
      },
      {
        root: true,
      }
    );
    if (status) {
      if (type == "admin") {
        context.state.admins = context.state.admins.filter(
          (ad) => ad.id != userId
        );
      } else {
        context.state.users = context.state.users.filter(
          (us) => us.id != userId
        );
      }
    }
  },

  async paginationDataCustomerRequest(context, page) {
    const { data, status } = await context.dispatch(
      "reusable/getPaginationData",
      {
        type: "customer-request",
        page,
      },
      {
        root: true,
      }
    );
    if (status) {
      console.log(data);
      context.state.customerRequests = data.data.data;
    }
  },

  async cancelRequest() {},

  async singleRequest(context, id) {
    const { data, status } = await context.dispatch(
      "reusable/getSingleData",
      {
        type: "admin/customer-request",
        id,
        userToken: true,
      },
      {
        root: true,
      }
    );
    console.log(status);
    if (status) {
      console.log(data.data);
      context.state.requestData = data.data;

      context.state.leftUpTooth = JSON.parse(
        context.state.requestData.left_up_tooth_number
      );
      context.state.rightUpTooth = JSON.parse(
        context.state.requestData.right_up_tooth_number
      );
      context.state.leftDownTooth = JSON.parse(
        context.state.requestData.left_down_tooth_number
      );
      context.state.rightDownTooth = JSON.parse(
        context.state.requestData.right_down_tooth_number
      );
    }
  },



  async sendNotification(context) {
 const {data,status}=   await context.dispatch(
      "reusable/createData",
      {
        type: "admin/send-notification",

        objectData: {
          titleEn: context.state.titleEn,
          titleAr: context.state.titleAr,
          bodyEn: context.state.bodyEn,
          bodyAr: context.state.bodyAr,
        },
        userToken: true,
      },
      {
        root: true,
      }
    );


        await context.dispatch(
        "reusable/firebaseNotification",
        {
          to: "/topics/app",
          body: context.state.bodyEn,
          title: context.state.titleEn,

          type: "order",
        },
        { root: true }
      );

    if(status){

    }
  },

  
};
