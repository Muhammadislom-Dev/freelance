import { Link } from 'react-router-dom';
import './Home.css';


export const Home = () => {
	return (
		<div>
			<div
				id='carouselExampleControls'
				className='carousel slide'
				data-bs-ride='carousel'>
				<div className='carousel-inner'>
					<div className='carousel-item active'>
						<div className='slide-inner'>
							<div className='slide-info'>
								<h2
									className={{
										marginTop: '0',
										fontSize: '26px',
									}}>
									Наклеейки / стикеры / стикерпаки
								</h2>
								<ul>
									<li>Срочная печать контурных стикеров</li>
									<li>Печать стикеров с золотом</li>
									<li>Профессионалоная отделка</li>
									<li>
										Загрузите файлы онлайн 24/7 прямо на
										сайте{' '}
									</li>
									<li>Доставка от 300р</li>
								</ul>
								<Link
									className={{
										backgroundColor: 'primary',
										display: 'inline-block',
										padding: '5px 15px',
										fontSize: '20px',
									}}
									to='/'>
									Заказать
								</Link>
							</div>
						</div>
					</div>
					<div className='carousel-item'>
						<div className='slide-inner'>
							<div className='slide-info'>
								<h2
									className={{
										marginTop: '0',
										fontSize: '26px',
									}}>
									Наклеейки / стикеры / стикерпаки
								</h2>
								<ul>
									<li>Срочная печать контурных стикеров</li>
									<li>Печать стикеров с золотом</li>
									<li>Профессионалоная отделка</li>
									<li>
										Загрузите файлы онлайн 24/7 прямо на
										сайте{' '}
									</li>
									<li>Доставка от 300р</li>
								</ul>
								<Link
									className={{
										backgroundColor: 'primary',
										display: 'inline-block',
										padding: '5px 15px',
										fontSize: '20px',
									}}
									to='/'>
									Заказать
								</Link>
							</div>
						</div>
					</div>
					<div className='carousel-item'>
						<div className='slide-inner'>
							<div className='slide-info'>
								<h2
									className={{
										marginTop: '0',
										fontSize: '26px',
									}}>
									Наклеейки / стикеры / стикерпаки
								</h2>
								<ul>
									<li>Срочная печать контурных стикеров</li>
									<li>Печать стикеров с золотом</li>
									<li>Профессионалоная отделка</li>
									<li>
										Загрузите файлы онлайн 24/7 прямо на
										сайте{' '}
									</li>
									<li>Доставка от 300р</li>
								</ul>
								<Link
									className={{
										backgroundColor: 'primary',
										display: 'inline-block',
										padding: '5px 15px',
										fontSize: '20px',
									}}
									to='/'>
									Заказать
								</Link>
							</div>
						</div>
					</div>
				</div>
				<button
					className='carousel-control-prev'
					type='button'
					data-bs-target='#carouselExampleControls'
					data-bs-slide='prev'>
					<span
						className='carousel-control-prev-icon'
						aria-hidden='true'></span>
					<span className='visually-hidden'>Previous</span>
				</button>
				<button
					className='carousel-control-next'
					type='button'
					data-bs-target='#carouselExampleControls'
					data-bs-slide='next'>
					<span
						className='carousel-control-next-icon'
						aria-hidden='true'></span>
					<span className='visually-hidden'>Next</span>
				</button>
			</div>
		</div>
	);
};
