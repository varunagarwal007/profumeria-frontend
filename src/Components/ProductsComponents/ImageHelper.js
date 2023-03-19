import { API } from "../../backend";

const ImageHelper = (props) => {
	const imageurl = props.product
		? `${API}/api/product/photo/${props.product._id}`
		: `https://images.unsplash.com/photo-1594322436404-5a0526db4d13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1915&q=80`;
	return (
		<div>
			<img
				className={props.className}
				src={imageurl}
				alt="produts"
				style={{
					height: props.height,
					width: props.width,
				}}
			/>
		</div>
	);
};

export default ImageHelper;
