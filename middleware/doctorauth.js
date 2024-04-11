export default function (context) {
  if (context.store.state.userState.role != 'doctor') {
    context.redirect('/auth/doctor')
  }
}
