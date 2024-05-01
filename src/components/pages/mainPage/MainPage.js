import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import {getPosts} from "../../../store/PostSlice";
import Card from "../card/Card";

const Page = () => {

    const dispatch = useDispatch();
    const {  posts, preloader  } = useSelector((state) => state.postSlice);

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <div>
            {preloader ? (
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            ) : (
                <div>
                    {posts &&
                        posts.map((user) => (
                            <div>
                                <Card props={user} />
                            </div>
                        ))}
                </div>
            )}
        </div>
    );
};

export default Page;