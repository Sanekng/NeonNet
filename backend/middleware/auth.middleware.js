import jwt from 'jsonwebtoken';

const protect = (req, res, next) => {
    let token = req.headers.authorization?.split(" ")[1];

    if(!token) return res.status(401).json({ message: "Not authorized, no token" });

    try{ 
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch(error){
        res.status(401).json({ message: "Not authorized, token failed" });
    }
}

const authorize = (...roles) =>{
    return(req, res, next) =>{
        if (!roles.includes(req.user.roles)){
            return res.status(403).json({ message: "Access denied: insufficient role" })
        }
        next();
    }
}

export {protect, authorize};