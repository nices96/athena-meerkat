/* 
 * Athena Peacock Dolly - DataGrid based Clustering 
 * 
 * Copyright (C) 2014 Open Source Consulting, Inc. All rights reserved by Open Source Consulting, Inc.
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 *
 * Revision History
 * Author			Date				Description
 * ---------------	----------------	------------
 * Bong-Jin Kwon	2015. 1. 9.		First Draft.
 */
package com.athena.dolly.controller.web.tomcat.instance;

import java.io.Serializable;
import java.util.Collection;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.athena.dolly.controller.web.application.Application;
import com.athena.dolly.controller.web.datasource.Datasource;
import com.athena.dolly.controller.web.domain.Domain;
import com.athena.dolly.controller.web.machine.Machine;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

/**
 * <pre>
 * 
 * </pre>
 * 
 * @author Tran Ho
 * @version 2.0
 */
@Entity
@Table(name = "tomcat")
public class TomcatInstance implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name = "Id")
	private int Id;
	@Column(name = "name", nullable = false)
	private String name;
	@Column(nullable = false, name = "http_port")
	private int httpPort;
	@Column(nullable = false, name = "ajp_port")
	private int ajpPort;
	@Column(nullable = false, name = "redirect_port")
	private int redirectPort;

	@ManyToOne
	// using this annotation to prevent Infinite recursion json mapping
	@JsonBackReference
	private Machine machine;
	@ManyToOne
	// using this annotation to prevent Infinite recursion json mapping
	@JsonBackReference
	@JoinColumn(name = "domain_id")
	private Domain domain;

	@OneToMany(mappedBy = "tomcat", fetch = FetchType.LAZY)
	// using this annotation to prevent Infinite recursion json mapping
	@JsonManagedReference
	private Collection<Application> applications;

	@JoinTable(name = "tomcat_datasource", joinColumns = { @JoinColumn(name = "tomcat_id", referencedColumnName = "id") }, inverseJoinColumns = { @JoinColumn(name = "datasource_id", referencedColumnName = "id") })
	@ManyToMany(fetch = FetchType.LAZY)
	@JsonManagedReference
	private Collection<Datasource> datasources;

	private int state;

	public TomcatInstance() {
	}

	public int getId() {
		return Id;
	}

	public void setId(int id) {
		this.Id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String instanceName) {
		this.name = instanceName;
	}

	public int getHttpPort() {
		return httpPort;
	}

	public void setHttpPort(int httpPort) {
		this.httpPort = httpPort;
	}

	public int getAjpPort() {
		return ajpPort;
	}

	public void setAjpPort(int ajpPort) {
		this.ajpPort = ajpPort;
	}

	public int getRedirectPort() {
		return redirectPort;
	}

	public void setRedirectPort(int redirectPort) {
		this.redirectPort = redirectPort;
	}

	public Machine getMachine() {
		return machine;
	}

	public void setMachine(Machine machine) {
		this.machine = machine;
	}

	public Domain getDomain() {
		return domain;
	}

	public void setDomain(Domain domain) {
		this.domain = domain;
	}

	public Collection<Application> getApplications() {
		return applications;
	}

	public void setApplications(Collection<Application> applications) {
		this.applications = applications;
	}

	public int getState() {
		return state;
	}

	public void setState(int state) {
		this.state = state;
	}

	public Collection<Datasource> getDatasources() {
		return datasources;
	}

	public void setDatasources(Collection<Datasource> datasources) {
		this.datasources = datasources;
	}

}
