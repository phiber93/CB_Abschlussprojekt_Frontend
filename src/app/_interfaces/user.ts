export interface User {
    user_id: number,
    username: string,
    email: string,
    created_at: Date,
    roles: Array<string>
}
