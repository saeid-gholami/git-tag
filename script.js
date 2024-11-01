const isLogin = (username) => {
    return true
}

const register = (userID) => {
    return false
}

const getMe = (userID) => {
    return true
}

const addCourse = (courseID) => {
    return true
}

const removeCourse = (courseID) => {
    return { message: 'Course Removed' }
}

const updateCourse = (courseID) => {
    return { message: 'Course Updated' }
}

const likePost = (postID, userID) => {
    return false
}