// Enums - enumerations types
// if you want to define in key value pair then it is used 


enum UserRoles{
    ADMIN = "admin",
    GUEST = "guest",
    SUPER_ADMIN = "super_admin"
}

UserRoles.SUPER_ADMIN;

enum StatusCodes{
    SUCCESS = 200,
    NOT_FOUND = 404,
    SERVER_ERROR = 500
}

StatusCodes.NOT_FOUND;


enum Directions{
    NORTH,
    SOUTH,
    EAST,
    WEST
}

Directions.EAST;
